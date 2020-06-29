import * as Joi from '@hapi/joi';
import { PaymentsForm } from '../../models/enum/Payments-Form';

const VendorSchema = Joi.object({
    name: Joi.string().required(),
    paymentForm: Joi.string().required().valid([PaymentsForm.CASH, PaymentsForm.DEFERRED]),
});


export default VendorSchema