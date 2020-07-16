import Order from '../models/Order';
import { injectable } from 'inversify';

@injectable()
export class OrderRepository {
    constructor() { }

    getAll() {
        return Order.find({});;
    }

    getByID(id) {
        return Order.findById(id);
    }

    create(order) {

        return Order.create(order);
    }

    update(id, orders) {        
        return Order.findByIdAndUpdate(id, orders, { new: true });
    }

    delete(id) {
        return Order.remove(id);
    }
}

