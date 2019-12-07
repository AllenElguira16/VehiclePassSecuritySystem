import { Model, ObjectID, Unique, MongoosePlugin } from '@tsed/mongoose'
import { Property, Default } from '@tsed/common'
import UniquePlugin from 'mongoose-unique-validator'

@Model()
@MongoosePlugin(UniquePlugin)
export class User {
  @ObjectID('id')
  public _id!: string

  @Property()
  public firstname!: string

  @Property()
  public lastname!: string

  @ObjectID()
  @Unique()
  public schoolID!: string

  @Property()
  public type!: string

  @Property()
  @Default(Date.now())
  public dateCreated: Date = new Date()
}
