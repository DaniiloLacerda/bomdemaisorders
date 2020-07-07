import { Request, Response } from 'express';
import { interfaces, controller, httpGet, httpPost, httpPut, httpDelete } from "inversify-express-utils";
import TYPES from '../types';
import { inject } from 'inversify';
import Middleware from '../helpers/Middleware';
import MerchantSchema from '../helpers/schemas/MerchantSchema';
import { MerchantRepository } from '../repositories/merchant.repository';


@controller("/merchant")
export class MerchantController implements interfaces.Controller {

  constructor(
    @inject(TYPES.MerchantRepository) readonly merchantRepository: MerchantRepository) {
  }

  @httpGet("/")
  public async get(req: Request, res: Response) {
    try {
      const merchant = await this.merchantRepository.getAll();
      res.status(200).json(merchant);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPost("/", Middleware.middleware(MerchantSchema, 'body'))
  public async post(req: Request, res: Response) {
    try {
      const merchant = await this.merchantRepository.create(req.body);
      res.status(200).json(merchant);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPut("/:id", Middleware.middleware(MerchantSchema, 'body'))
  public async put(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };
      const merchant = req.body;;
      const result = await this.merchantRepository.update(id, merchant);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpDelete("/:id")
  public async delete(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };

      const result = await this.merchantRepository.delete(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}