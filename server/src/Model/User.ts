import { Model, ObjectID, Unique } from '@tsed/mongoose';
import { Property, Default } from '@tsed/common';

@Model()
export class User {
  @ObjectID('id')
  public _id!: string;

  @Property()
  public firstname!: string;

  @Property()
  public lastname!: string | undefined;

  @ObjectID()
  @Unique()
  public licenseId!: string;

  @Property()
  public type!: string;

  @Property()
  @Default(Date.now())
  public dateCreated: Date = new Date();
}
