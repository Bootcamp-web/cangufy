import mongoose, { Document, Schema } from 'mongoose';


export interface Parents extends Document {
  firstName: String,
  lastName:String,
  email:String,
  location: String,
  schedule:Date,
  price_max:Number,
  numChildren:Number,
  additionalFeatures:[String]
}

const schema = new Schema({
  firstName: {type: String,require: true},
  lastName: {type: String,require: true},  
  email:String,
  location: {type: String,require: true},
  schedule:{type: Date,require: true},
  price_max:{type: Number,require: true},
  numChildren:{type: Number,require: true},
  additionalFeatures:{
    type:[String],
    enum: {
      values: ['English', 'Maths'],
      message: '{VALUE} is not supported'
    }
  }
});

export const Parents = mongoose.model<Parents>('Parents', schema);