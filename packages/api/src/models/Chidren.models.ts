import mongoose, { Document, Schema } from 'mongoose';




export interface Children extends Document {
    Name: Number,
    age: Number,
    //TODO: Alergias, etc....
   // special_cares:String
}

const schema = new Schema({
    name:  { type: Number, require: true },
    age: {type: Number,required: true},
    //special_cares:{type:[String],required: true}
   
});

export const Children = mongoose.model<Children>('Children', schema);