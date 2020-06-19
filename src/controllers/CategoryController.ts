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
        const categorys = {
            name: category.name
        }
        return Category.findByIdAndUpdate(id, categorys, { new: true });
    };

    delete(id) {
        return Category.remove(id);
    };
};

export default new CategoryController();