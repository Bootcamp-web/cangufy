import mongoose, { Document, Schema } from 'mongoose';
import { Children } from './Chidren.models';




export interface Parents extends Document {
  firstName: String,
  lastName:String,
  childrenId: Children["_id"],
  location: String,
  schedule:Date,
  price_max:Number,
  additionalFeatures:[String]
}

const schema = new Schema({
  firstName: {type: String,require: true},
  lastName: {type: String,require: true},
  childrenId: { type: Schema.Types.ObjectId, ref: "Children" },
  location: {type: String,require: true},
  schedule:{type: Date,require: true},
  price_max:{type: Number,require: true},
  additionalFeatures:{
    type:[String],
    enum: {
      values: ['English', 'Maths'],
      message: '{VALUE} is not supported'
    }
  }
});

export const Parents = mongoose.model<Parents>('Parents', schema);