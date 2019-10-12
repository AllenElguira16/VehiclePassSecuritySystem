import { Model, ObjectID, Unique } from '@tsed/mongoose'
import { Property, Default } from '@tsed/common'

@Model()
export class History {
  @ObjectID('id')
  public _id: string | undefined

  @ObjectID()
  @Unique()
  public userId: string | undefined

  @Property()
  public timeIn: Date | undefined

  @Property()
  public timeOut: Date | undefined

  // @Property()
  // @Default(Date.now())
  // public dateCreated: Date = new Date();
}
