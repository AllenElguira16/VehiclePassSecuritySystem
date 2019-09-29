import { Model, ObjectID, Unique } from '@tsed/mongoose';
import { Property, Default, Minimum } from '@tsed/common';

@Model()
export class User {
  @ObjectID('id')
  public _id: string | undefined;

  @ObjectID()
  @Unique()
  public userId: string | undefined;

  @Property()
  @Minimum(2)
  public firstname: string | undefined;

  @Property()
  @Minimum(2)
  public lastname: string | undefined;

  @Property()
  @Default(Date.now())
  public dateCreated: Date = new Date();
}
