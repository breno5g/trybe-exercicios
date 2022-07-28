import { model as mongooseCreateModel, Schema } from 'mongoose';
import IFrame from '../interfaces/Frame';
import MongoModel from './Mongo.model';

const frameMongooseSchema = new Schema<IFrame>({
  color: String,
  material: String,
});

class Frame extends MongoModel<IFrame> {
  constructor(model = mongooseCreateModel('Frame', frameMongooseSchema)) {
    super(model);
  }
}

export default Frame;