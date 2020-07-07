import User from '../models/Product';
import { injectable } from 'inversify';

@injectable()
export class UserRepository {
    constructor() { }

    getAll() {
        return User.find({});;
    }

    getByID(id) {
        return User.findById(id);
    }

    create(user) {

        return User.create(user);
    }

    update(id, user) {
        return User.findByIdAndUpdate(id, user, { new: true });
    }

    delete(id) {
        return User.remove(id);
    }
}
