import mongoose, { Document, Schema } from 'mongoose';

export interface Nanny extends Document {
    first_name: String,
    last_name:String
    min_age: Number,
    max_age: Number,
    location: String,
    pricePerHour:Number,
    additionalFeatures:[String]
}

const schema = new Schema({
    first_name: {type: String,require: true},
    last_name: {type: String,require: true},
    min_age: {type: Number,required: true},
    max_age: {type: Number,required: true},
    location: {type: String,require: true},
    pricePerHour:{type: Number,require: true},
    additionalFeatures:{
        type:[String], 
        require: true,
        enum: {
          values: ['English', 'Maths'],
          message: '{VALUE} is not supported'
        }
    }
});

export const Nanny = mongoose.model<Nanny>('Nanny', schema);