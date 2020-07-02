import { Request, Response } from 'express';
import { interfaces, controller, httpGet, httpPost, httpPut, httpDelete } from "inversify-express-utils";
import TYPES from '../types';
import { inject } from 'inversify';
import Middleware from '../helpers/Middleware';
import { VendorRepository } from '../repositories/vendor.repository';
import VendorSchema from '../helpers/schemas/VendorSchema';


@controller("/vendor")
export class VendorController implements interfaces.Controller {

  constructor(
    @inject(TYPES.VendorRepository) readonly vendorRepository: VendorRepository) {
  }

  @httpGet("/")
  public async get(req: Request, res: Response) {
    try {
      const vendor = await this.vendorRepository.getAll();
      res.status(200).json(vendor);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPost("/", Middleware.middleware(VendorSchema, 'body'))
  public async post(req: Request, res: Response) {
    try {
      const vendor = await this.vendorRepository.create(req.body);
      res.status(200).json(vendor);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPut("/:id", Middleware.middleware(VendorSchema, 'body'))
  public async put(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };
      const vendor = req.body;;
      const result = await this.vendorRepository.update(id, vendor);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpDelete("/:id")
  public async delete(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };

      const result = await this.vendorRepository.delete(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}