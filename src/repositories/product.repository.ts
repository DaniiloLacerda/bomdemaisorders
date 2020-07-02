import Products from '../models/Product';
import { injectable } from 'inversify';

@injectable()
export class ProductRepository {
    constructor() { }

    getAll() {
        return Products.find({});;
    }

    getByID(id) {
        return Products.findById(id);
    }

    create(products) {

        return Products.create(products);
    }

    update(id, products) {
        return Products.findByIdAndUpdate(id, products, { new: true });
    }

    delete(id) {
        return Products.remove(id);
    }
}
