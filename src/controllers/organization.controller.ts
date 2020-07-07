import { Request, Response } from 'express';
import { interfaces, controller, httpGet, httpPost, httpPut, httpDelete } from "inversify-express-utils";
import TYPES from '../types';
import { inject } from 'inversify';
import Middleware from '../helpers/Middleware';
import { OrganizationRepository } from '../repositories/organization.repository';
import OrganizationSchema from '../helpers/schemas/OrganizationSchema';


@controller("/organization")
export class OrganizationController implements interfaces.Controller {

  constructor(
    @inject(TYPES.OrganizationRepository) readonly organizationRepository: OrganizationRepository) {
  }

  @httpGet("/")
  public async get(req: Request, res: Response) {
    try {
      const organization = await this.organizationRepository.getAll();
      res.status(200).json(organization);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPost("/", Middleware.middleware(OrganizationSchema, 'body'))
  public async post(req: Request, res: Response) {
    try {
      const organization = await this.organizationRepository.create(req.body);
      res.status(200).json(organization);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPut("/:id", Middleware.middleware(OrganizationSchema, 'body'))
  public async put(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };
      const organization = req.body;;
      const result = await this.organizationRepository.update(id, organization);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpDelete("/:id")
  public async delete(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };

      const result = await this.organizationRepository.delete(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}