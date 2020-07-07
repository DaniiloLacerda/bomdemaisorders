import { injectable } from 'inversify';
import Merchant from '../models/Merchant';

@injectable()
export class MerchantRepository {
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

    update(id, merchants) {
        const merchant = {
            name: merchants.name
        }
        return Merchant.findByIdAndUpdate(id, merchant, { new: true });
    }

    delete(id) {
        return Merchant.remove(id);
    }
}

