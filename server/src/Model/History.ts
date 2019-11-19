import { Model, ObjectID, Unique } from '@tsed/mongoose'
import { Property, Default } from '@tsed/common'

@Model()
export class History {
  @ObjectID('id')
  public _id!: string

  @Property()
  public type!: string

  @Property()
  public msg!: string

  @Property()
  @Default(Date.now())
  public dateCreated: Date = new Date()
}
