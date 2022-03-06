import mongoose, { Document, Schema } from 'mongoose';
import { Parents } from './Parents.model';
import { Nanny } from './Nanny.model';

export interface Booking extends Document {
    nannyId: Nanny["_id"],
    parentsId: Parents["_id"],
    dateStart: Date,
    //dateEnd: Date,
    confirmed: Boolean
 
}

const schema = new Schema({
    nannyId: { type: Schema.Types.ObjectId, ref: "Nanny" },
    parentsId: { type: Schema.Types.ObjectId, ref: "Parents" },
    dateStart:{ type: Date, require: true},
   // dateEnd:{ type: Date, require: true},
    confirmed:{ type: Boolean},
})


export const Booking = mongoose.model<Booking>('Booking', schema);