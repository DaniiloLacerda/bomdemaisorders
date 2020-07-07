import { Request, Response } from 'express';
import { interfaces, controller, httpGet, httpPost, httpPut, httpDelete } from "inversify-express-utils";
import TYPES from '../types';
import { inject } from 'inversify';
import Middleware from '../helpers/Middleware';
import { UserRepository } from '../repositories/user.repository';
import UserSchema from '../helpers/schemas/UserSchema';


@controller("/user")
export class UserController implements interfaces.Controller {

  constructor(
    @inject(TYPES.UserRepository) readonly userRepository: UserRepository) {
  }

  @httpGet("/")
  public async get(req: Request, res: Response) {
    try {
      const user = await this.userRepository.getAll();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPost("/", Middleware.middleware(UserSchema, 'body'))
  public async post(req: Request, res: Response) {
    try {
      const user = await this.userRepository.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPut("/:id", Middleware.middleware(UserSchema, 'body'))
  public async put(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };
      const user = req.body;;
      const result = await this.userRepository.update(id, user);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpDelete("/:id")
  public async delete(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };

      const result = await this.userRepository.delete(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}