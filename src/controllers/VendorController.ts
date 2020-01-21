import Vendor from '../models/Vendor';

class VendorController {
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
        const vendor = {
            name: vendors.name
        }
        return Vendor.findByIdAndUpdate(id, vendor, { new: true });
    }

    delete(id) {
        return Vendor.remove(id);
    }
}

export default new VendorController();