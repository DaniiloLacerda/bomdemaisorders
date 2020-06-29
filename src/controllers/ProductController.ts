import Products from '../models/Product';

class ProductController {
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

export default new ProductController();