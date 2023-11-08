import mongoose, { Document, Schema } from 'mongoose';
import {mongoosePagination, Pagination} from 'mongoose-paginate-ts';

export interface IFaq {
    username: string;
    question: string;
    answer: string;
    likes: number;
    verified: boolean;
}

export interface IFaqModel extends IFaq, Document {}

const ProductSchema: Schema = new Schema(
    {
        username: { type: String, required: true },
        question: { type: String, required: true },
        answer: { type: String, required: true },
        likes: { type: Number, required: true },
    },
    {
        versionKey: false
    }
);

ProductSchema.plugin(mongoosePagination);
export default mongoose.model<IFaqModel, Pagination<IFaqModel>>('FAQ', ProductSchema);