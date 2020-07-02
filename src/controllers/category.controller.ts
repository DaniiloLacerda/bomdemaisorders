import { Request, Response } from 'express';
import { interfaces, controller, httpGet, httpPost, request, response, httpPut, httpDelete } from "inversify-express-utils";
import { CategoryRepository } from '../repositories/category.repository';
import TYPES from '../types';
import { inject } from 'inversify';
import CategorySchema from '../helpers/schemas/CategorySchema';
import Middleware from '../helpers/Middleware';

@controller("/category")
export class CategoryController implements interfaces.Controller {

  constructor(
    @inject(TYPES.CategoryRepository) readonly categoryRepository: CategoryRepository) {
  }

  @httpGet("/")
  public async get(req: Request, res: Response) {
    try {
      const category = await this.categoryRepository.getAll();
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPost("/", Middleware.middleware(CategorySchema, 'body'))
  public async post(req: Request, res: Response) {
    try {
      const category = await this.categoryRepository.create(req.body);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPut("/:id", Middleware.middleware(CategorySchema, 'body'))
  public async put(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };
      const category = req.body;;
      const result = await this.categoryRepository.update(id, category);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpDelete("/:id")
  public async delete(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };

      const result = await this.categoryRepository.delete(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}