import { Request, Response } from 'express';
import { interfaces, controller, httpGet, httpPost, httpPut, httpDelete } from "inversify-express-utils";
import TYPES from '../types';
import { inject } from 'inversify';
import Middleware from '../helpers/Middleware';
import { OrderRepository } from '../repositories/order.repository';
import OrderSchema from '../helpers/schemas/OrderSchema';

@controller("/order")
export class OrderController implements interfaces.Controller {

  constructor(
    @inject(TYPES.OrderRepository) readonly orderRepository: OrderRepository) {
  }

  @httpGet("/")
  public async get(req: Request, res: Response) {
    try {
      const order = await this.orderRepository.getAll();
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPost("/", Middleware.middleware(OrderSchema, 'body'))
  public async post(req: Request, res: Response) {
    try {
      const order = await this.orderRepository.create(req.body);
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPut("/:id", Middleware.middleware(OrderSchema, 'body'))
  public async put(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };
      const order = req.body;
      const result = await this.orderRepository.update(id, order);     
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpDelete("/:id")
  public async delete(req: Request, res: Response) {
    try {
      const id = { _id: req.params.id };
      const result = await this.orderRepository.delete(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}