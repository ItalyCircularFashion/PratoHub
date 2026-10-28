import { BadRequestException, Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { PrismaService } from './prisma.service';
const VERSION = 'PRATOHUB-TX-1.0';
const codePattern = /^TX-\d{2}(?:\.\d{2}){0,2}$/;
@Controller('taxonomy')
export class TaxonomyController {
  constructor(private readonly db: PrismaService) {}
  @Get()
  async list(@Query() query: Record<string, unknown>) {
    const keys = Object.keys(query);
    if (keys.some(k => k !== 'level') || (query.level !== undefined && (typeof query.level !== 'string' || !/^[123]$/.test(query.level)))) throw new BadRequestException('level deve essere 1, 2 o 3');
    const level = query.level === undefined ? undefined : Number(query.level);
    return { items: await this.db.taxonomy_nodes.findMany({ where: { taxonomy_version: VERSION, active: true, ...(level ? { level } : {}) }, orderBy: [{ code: 'asc' }] }) };
  }
  @Get(':code/children')
  async children(@Param('code') code: string, @Query() query: Record<string, unknown>) {
    if (Object.keys(query).length || !codePattern.test(code)) throw new BadRequestException('Codice o query non validi');
    const parent = await this.db.taxonomy_nodes.findUnique({ where: { taxonomy_version_code: { taxonomy_version: VERSION, code } } });
    if (!parent || !parent.active) throw new NotFoundException('Nodo non trovato');
    return { items: await this.db.taxonomy_nodes.findMany({ where: { parent_id: parent.id, taxonomy_version: VERSION, active: true }, orderBy: { code: 'asc' } }) };
  }
}
