import { Module } from '@nestjs/common';
import { TaxonomyController } from './taxonomy.controller';
import { AdminTaxonomyController } from './admin-taxonomy.controller';
import { AdminAuthGuard } from './admin-auth.guard';
import { PrismaService } from './prisma.service';
@Module({ controllers: [TaxonomyController, AdminTaxonomyController], providers: [PrismaService, AdminAuthGuard] })
export class AppModule {}
