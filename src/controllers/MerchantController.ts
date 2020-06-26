import Merchant from "../models/Merchant";

class MerchantController {
    constructor() { }

    getAll() {
        return Merchant.find({});;
    }

    getByID(id) {
        return Merchant.findById(id);
    }

    create(merchant) {

        return Merchant.create(merchant);
    }

    update(id, merchant) {
        const merchants = {
            name: merchant.name
        }
        return Merchant.findByIdAndUpdate(id, merchants, { new: true });
    }

    delete(id) {
        return Merchant.remove(id);
    }
}

export default new MerchantController();