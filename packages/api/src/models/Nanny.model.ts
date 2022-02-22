import mongoose, { Document, Schema } from 'mongoose';

export interface Nanny extends Document {
    min_age: Number,
    max_age: Number,
    location: String,
    pricePerHour:Number,
    additionalFeatures:[String]
}

const schema = new Schema({
  
    min_age: {type: Number,required: true},
    max_age: {type: Number,required: true},
    location: {type: String,require: true},
    pricePerHour:{type: Number,require: true},
    additionalFeatures:{type:[String], require: true}
});

export const Nanny = mongoose.model<Nanny>('Nanny', schema);