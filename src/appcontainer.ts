import TYPES from './types';

import { Container } from 'inversify';
import { CategoryRepository } from './repositories/category.repository';
import { ProductRepository } from './repositories/product.repository';
import { VendorRepository } from './repositories/vendor.repository';
import { OrganizationRepository } from './repositories/organization.repository';
import { MerchantRepository } from './repositories/merchant.repository';
import { UserRepository } from './repositories/user.repository';

const container = new Container();

container.bind<CategoryRepository>(TYPES.CategoryRepository).to(CategoryRepository).inSingletonScope();
container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepository).inSingletonScope();
container.bind<VendorRepository>(TYPES.VendorRepository).to(VendorRepository).inSingletonScope();
container.bind<OrganizationRepository>(TYPES.OrganizationRepository).to(OrganizationRepository).inSingletonScope();
container.bind<MerchantRepository>(TYPES.MerchantRepository).to(MerchantRepository).inSingletonScope();
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();

export default container;