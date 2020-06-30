import TYPES from './types';

import { Container } from 'inversify';
import { CategoryRepository } from './repositories/category.repository';


const container = new Container();

container.bind<CategoryRepository>(TYPES.CategoryRepository).to(CategoryRepository).inSingletonScope();
export default container;