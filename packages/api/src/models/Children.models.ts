import mongoose, { Document, Schema } from 'mongoose';
import { Parents } from './Parents.model';

export interface Children extends Document {
    name: String,
    age: Number,
    parentId: Parents["_id"]
    //TODO: Alergias, etc....
   // special_cares:String
}

const schema = new Schema({
    name:  { type: String, require: true },
    age: {type: Number,required: true},
    parentId:{ type: Schema.Types.ObjectId, ref: "Parents" }
    //special_cares:{type:[String],required: true}
   
});

export const Children = mongoose.model<Children>('Children', schema);