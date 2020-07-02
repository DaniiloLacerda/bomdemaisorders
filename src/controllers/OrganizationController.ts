import Organization from '../models/Organization';

class OrganizationController {
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

export default new OrganizationController();