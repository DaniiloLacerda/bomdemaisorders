import { Schema, model } from 'mongoose';
import Category from './Category';


const Products = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true
});

export default model('Products', Products)