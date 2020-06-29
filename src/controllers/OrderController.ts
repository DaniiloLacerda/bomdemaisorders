import Order from '../models/Order';

class OrderController {
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

    update(id, order) {

        return Order.findByIdAndUpdate(id, order, { new: true });
    }

    delete(id) {
        return Order.remove(id);
    }
}

export default new OrderController();