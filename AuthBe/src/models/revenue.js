import { Schema, model } from 'mongoose';

const revenueSchema = new Schema({
  date: { type: Date },
  amount: { type: Number },
});

export const Revenue = model('Revenue', revenueSchema);
