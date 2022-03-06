import mongoose, { Document, Schema } from 'mongoose';

export interface Nanny extends Document {
    firstName: String,
    lastName:String
    minAge: Number,
    maxAge: Number,
    email:String,
    location: String,
    pricePerHour:Number,
    additionalFeatures:[String]
}

const schema = new Schema({
    firstName: {type: String,require: true},
    lastName: {type: String,require: true},
    minAge: {type: Number,required: true},
    maxAge: {type: Number,required: true},
    email: {type: String,require: true},
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