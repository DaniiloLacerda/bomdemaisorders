import Category from '../models/Category';

class CategoryController {
    constructor() { }

    getAll() {
        return Category.find({});;
    };

    getByID(id) {
        return Category.findById(id);
    };

    create(category) {
        return Category.create(category);
    };

    update(id, category) {   
        return Category.findByIdAndUpdate(id, category, { new: true });
    };

    delete(id) {
        return Category.remove(id);
    };
};

export default new CategoryController();