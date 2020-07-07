import Organization from '../models/Organization';
import { injectable } from 'inversify';

@injectable()
export class OrganizationRepository {
    constructor() { }

    getAll() {
        return Organization.find({});;
    }

    getByID(id) {
        return Organization.findById(id);
    }

    create(organization) {

        return Organization.create(organization);
    }

    update(id, organizations) {
        const organization = {
            name: organizations.name
        }
        return Organization.findByIdAndUpdate(id, organization, { new: true });
    }

    delete(id) {
        return Organization.remove(id);
    }
}

