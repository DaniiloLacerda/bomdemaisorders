import { Request, Response } from 'express';
import { interfaces, controller, httpGet, httpPost, httpPut, httpDelete } from "inversify-express-utils";
import TYPES from '../types';
import { inject } from 'inversify';
import Middleware from '../helpers/Middleware';
import { ProductRepository } from '../repositories/product.repository';
import Productschema from '../helpers/schemas/ProductSchema';


@controller("/product")
export class ProductController implements interfaces.Controller {

  constructor(
    @inject(TYPES.ProductRepository) readonly productRepository: ProductRepository) {
  }

  @httpGet("/")
  public async get(req: Request, res: Response) {
    try {
      const product = await this.productRepository.getAll();
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPost("/", Middleware.middleware(Productschema, 'body'))
  public async post(req: Request, res: Response) {
    try {
      const product = await this.productRepository.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPut("/:id", Middleware.middleware(Productschema, 'body'))
  public async put(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };
      const product = req.body;;
      const result = await this.productRepository.update(id, product);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpDelete("/:id")
  public async delete(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };

      const result = await this.productRepository.delete(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}