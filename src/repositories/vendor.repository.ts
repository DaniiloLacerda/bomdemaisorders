import Vendor from '../models/Vendor';
import { injectable } from 'inversify';

@injectable()
export class VendorRepository {
    constructor() { }

    getAll() {
        return Vendor.find({});;
    }

    getByID(id) {
        return Vendor.findById(id);
    }

    create(products) {

        return Vendor.create(products);
    }

    update(id, vendors) {
        return Vendor.findByIdAndUpdate(id, vendors, { new: true });
    }

    delete(id) {
        return Vendor.remove(id);
    }
}