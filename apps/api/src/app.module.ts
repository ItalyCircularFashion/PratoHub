import { Module } from '@nestjs/common';
import { TaxonomyController } from './taxonomy.controller';
import { AdminTaxonomyController } from './admin-taxonomy.controller';
import { AdminAuthGuard } from './admin-auth.guard';
import { PrismaService } from './prisma.service';
import { CompaniesController } from './companies.controller';
@Module({ controllers: [TaxonomyController, AdminTaxonomyController, CompaniesController], providers: [PrismaService, AdminAuthGuard] })
export class AppModule {}
