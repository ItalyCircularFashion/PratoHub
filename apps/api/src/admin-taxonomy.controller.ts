import { BadRequestException, ConflictException, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Body, Query, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { AdminAuthGuard } from './admin-auth.guard';

const VERSION = 'PRATOHUB-TX-1.0';
const CODE = /^TX-\d{2}(?:\.\d{2}){0,2}$/;
type Input = Record<string, unknown>;
function body(value: unknown, allowed: string[]): Input {
 if (!value || typeof value !== 'object' || Array.isArray(value) || Object.keys(value).some(k => !allowed.includes(k))) throw new BadRequestException('Payload non valido');
 return value as Input;
}
function text(v: unknown, nullable = false, max = 200): string | null {
 if (nullable && v === null) return null;
 if (typeof v !== 'string' || !v.trim() || v !== v.trim() || v.length > max || Array.from(v).some(c => c.charCodeAt(0) < 32 || c.charCodeAt(0) === 127)) throw new BadRequestException('Testo non valido');
 return v;
}
function validCode(code: unknown): asserts code is string {
 if (typeof code !== 'string' || !CODE.test(code)) throw new BadRequestException('Codice non valido');
}
function changes(v: Input) {
 const data: {label_it?: string; label_en?: string | null; description_it?: string | null; sort_order?: number} = {};
 if ('label_it' in v) data.label_it = text(v.label_it) as string;
 if ('label_en' in v) data.label_en = text(v.label_en, true);
 if ('description_it' in v) data.description_it = text(v.description_it, true, 2000);
 if ('sort_order' in v) { if (!Number.isInteger(v.sort_order) || (v.sort_order as number) < 0 || (v.sort_order as number) > 32767) throw new BadRequestException('sort_order non valido'); data.sort_order = v.sort_order as number; }
 return data;
}
const fields = ['label_it', 'label_en', 'description_it', 'sort_order'];
@Controller('admin/taxonomy')
@UseGuards(AdminAuthGuard)
export class AdminTaxonomyController {
 constructor(private readonly db: PrismaService) {}
 @Get()
 async list(@Query() query: Input) {
  if (Object.keys(query).length) throw new BadRequestException('Query non valida');
  return {items: await this.db.taxonomy_nodes.findMany({where:{taxonomy_version:VERSION},orderBy:{code:'asc'}})};
 }
 @Get(':code')
 async get(@Param('code') code: string, @Query() query: Input) {
  validCode(code); if (Object.keys(query).length) throw new BadRequestException('Query non valida');
  const item = await this.db.taxonomy_nodes.findUnique({where:{taxonomy_version_code:{taxonomy_version:VERSION,code}}});
  if (!item) throw new NotFoundException(); return item;
 }
 @Post()
 async create(@Body() input: unknown) {
  const v = body(input, ['code','parent_code',...fields]); validCode(v.code);
  const code = v.code; const level = code.split('.').length; const data = changes(v);
  if (!data.label_it) throw new BadRequestException('label_it obbligatoria');
  const parentCode = level === 1 ? null : code.substring(0, code.lastIndexOf('.'));
  if ((v.parent_code ?? null) !== parentCode) throw new BadRequestException('parent_code non coerente');
  try { return await this.db.$transaction(async tx => {
   await tx.$executeRaw`SELECT pg_advisory_xact_lock(87654001)`;
   if (await tx.taxonomy_nodes.findUnique({where:{taxonomy_version_code:{taxonomy_version:VERSION,code}}})) throw new ConflictException('Codice già utilizzato');
   const parent = parentCode ? await tx.taxonomy_nodes.findUnique({where:{taxonomy_version_code:{taxonomy_version:VERSION,code:parentCode}}}) : null;
   if (parentCode && (!parent || !parent.active || parent.level !== level-1)) throw new BadRequestException('Parent non valido o inattivo');
   const result = await tx.taxonomy_nodes.create({data:{...data,label_it:data.label_it!,taxonomy_version:VERSION,code,level,parent_id:parent?.id ?? null}});
   await tx.audit_events.create({data:{actor:process.env.PRATOHUB_ADMIN_ACTOR!,entity_kind:'taxonomy_nodes',entity_id:result.id,action:'CREATE',after_jsonb:result as unknown as Prisma.InputJsonValue}});
   return result;
  }); } catch (e) { if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') throw new ConflictException('Codice già utilizzato'); throw e; }
 }
 @Patch(':code')
 async update(@Param('code') code: string, @Body() input: unknown) {
  validCode(code); const v=body(input, fields); if (!Object.keys(v).length) throw new BadRequestException('Payload vuoto'); const data=changes(v);
  return this.db.$transaction(async tx => {
   await tx.$executeRaw`SELECT pg_advisory_xact_lock(87654001)`;
   const before=await tx.taxonomy_nodes.findUnique({where:{taxonomy_version_code:{taxonomy_version:VERSION,code}}});
   if (!before) throw new NotFoundException(); if (!before.active) throw new ConflictException('Nodo inattivo');
   if (Object.entries(data).every(([k,val]) => before[k as keyof typeof before] === val)) return before;
   const after=await tx.taxonomy_nodes.update({where:{id:before.id},data});
   await tx.audit_events.create({data:{actor:process.env.PRATOHUB_ADMIN_ACTOR!,entity_kind:'taxonomy_nodes',entity_id:before.id,action:'UPDATE',before_jsonb:before as unknown as Prisma.InputJsonValue,after_jsonb:after as unknown as Prisma.InputJsonValue}}); return after;
  });
 }
 @Delete(':code')
 async deactivate(@Param('code') code: string) {
  validCode(code); return this.db.$transaction(async tx => {
   await tx.$executeRaw`SELECT pg_advisory_xact_lock(87654001)`;
   const before=await tx.taxonomy_nodes.findUnique({where:{taxonomy_version_code:{taxonomy_version:VERSION,code}}});
   if (!before) throw new NotFoundException(); if (!before.active) throw new ConflictException('Nodo già inattivo');
   if (await tx.taxonomy_nodes.count({where:{parent_id:before.id,active:true}}) || await tx.company_capabilities.count({where:{taxonomy_node_id:before.id}})) throw new ConflictException('Nodo referenziato o con figli attivi');
   const after=await tx.taxonomy_nodes.update({where:{id:before.id},data:{active:false}});
   await tx.audit_events.create({data:{actor:process.env.PRATOHUB_ADMIN_ACTOR!,entity_kind:'taxonomy_nodes',entity_id:before.id,action:'ARCHIVE',before_jsonb:before as unknown as Prisma.InputJsonValue,after_jsonb:after as unknown as Prisma.InputJsonValue}}); return after;
  });
 }
}
