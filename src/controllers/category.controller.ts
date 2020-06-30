import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, request, response } from "inversify-express-utils";
import { CategoryRepository } from '../repositories/category.repository';
import TYPES from '../types';
import { inject } from 'inversify';

@controller("/category")
export class CategoryController implements interfaces.Controller {
  
  //private categoryRepository: CategoryRepository;

  constructor(@inject(TYPES.CategoryRepository) readonly categoryRepository: CategoryRepository) {
   //   this.categoryRepository = categoryRepository;
  }

  @httpGet("/")
  public async index (@request() req: express.Request, @response() res: express.Response) {
    try {
      const category = await this.categoryRepository.getAll();
      res.status(200).json(category);
    } catch(error) {
      res.status(400).json(error);      
    }
  }
}