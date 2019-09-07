import { Model, ObjectID, Unique, MongoosePlugin } from '@tsed/mongoose';
import { Property, Default } from '@tsed/common';
import mongooseUniqueValidator from 'mongoose-unique-validator';

@Model()
@MongoosePlugin(mongooseUniqueValidator)
export class Vehicle {
  @ObjectID('id')
  public _id: string | undefined;

  @Property()
  public name: string | undefined;

  @Property()
  @Unique()
  public plateNumber: string | undefined;

  @Property()
  public type: string | undefined;

  @Property()
  public color: string | undefined;

  @Property()
  @Unique()
  public registrationNumber: string | undefined;

  @Property()
  @Default(Date.now())
  public dateCreated: Date = new Date();
}
