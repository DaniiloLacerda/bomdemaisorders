import Order from '../models/Vendor';

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

    update(id, orders) {
        const order = {
            name: orders.name
        }
        return Order.findByIdAndUpdate(id, order, { new: true });
    }

    delete(id) {
        return Order.remove(id);
    }
}

export default new OrderController();