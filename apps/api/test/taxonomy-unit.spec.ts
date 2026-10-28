import { BadRequestException, NotFoundException } from '@nestjs/common';
import { TaxonomyController } from '../src/taxonomy.controller';
import { PrismaService } from '../src/prisma.service';
describe('taxonomy controller unit validation', () => {
 const findMany = jest.fn().mockResolvedValue([]);
 const findUnique = jest.fn().mockResolvedValue(null);
 const controller = new TaxonomyController({taxonomy_nodes:{findMany,findUnique}} as unknown as PrismaService);
 beforeEach(() => jest.clearAllMocks());
 it('rejects malformed level before querying', async () => {
  await expect(controller.list({level:'3.0'})).rejects.toBeInstanceOf(BadRequestException);
  expect(findMany).not.toHaveBeenCalled();
 });
 it('rejects missing parent', async () => {
  await expect(controller.children('TX-99',{})).rejects.toBeInstanceOf(NotFoundException);
  expect(findMany).not.toHaveBeenCalled();
 });
 it('sets version, active and level filters', async () => {
  await controller.list({level:'2'});
  expect(findMany).toHaveBeenCalledWith(expect.objectContaining({where:{taxonomy_version:'PRATOHUB-TX-1.0',active:true,level:2}}));
 });
});
