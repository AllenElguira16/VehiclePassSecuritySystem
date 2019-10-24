import { Model, ObjectID, Unique } from '@tsed/mongoose'
import { Property, Default } from '@tsed/common'

@Model()
export class History {
  @ObjectID('id')
  public _id!: string

  @ObjectID()
  @Unique()
  public type!: string

  @Property()
  public msg!: string
  // @Property()
  // public timeIn!: Date

  // @Property()
  // public timeOut!: Date

  @Property()
  @Default(Date.now())
  public dateCreated: Date = new Date()
}
