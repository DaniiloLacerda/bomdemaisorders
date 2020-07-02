import TYPES from './types';

import { Container } from 'inversify';
import { CategoryRepository } from './repositories/category.repository';
import { ProductRepository } from './repositories/product.repository';
import { VendorRepository } from './repositories/vendor.repository';


const container = new Container();

container.bind<CategoryRepository>(TYPES.CategoryRepository).to(CategoryRepository).inSingletonScope();
container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepository).inSingletonScope();
container.bind<VendorRepository>(TYPES.VendorRepository).to(VendorRepository).inSingletonScope();

export default container;