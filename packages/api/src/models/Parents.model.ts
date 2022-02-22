import mongoose, { Document, Schema } from 'mongoose';

export interface Parents extends Document {
    children: Number,
    year: [Number],
    location: String,
    schedule:Date,
    price_max:Number,
    additionalFeatures:[String]
}

const schema = new Schema({
  children:  { type: Number, require: true },
  year: {type: [Number],required: true},
  location: {type: String,require: true},
  schedule:{type: Date,require: true},
  price_max:{type: Number,require: true},
  additionalFeatures:{type:[String]}
});

export const Parents = mongoose.model<Parents>('Parents', schema);