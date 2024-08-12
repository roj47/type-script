import mongoose, { Document, Schema } from 'mongoose';

interface IOccurrence extends Document {
  title: string;
  description: string;
  date: Date;
}

const OccurrenceSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model<IOccurrence>('Occurrence', OccurrenceSchema);
