import { Model, ObjectID, Unique } from "@tsed/mongoose";
import { Property, Default } from "@tsed/common";

@Model()
export class Vehicle {
  @ObjectID("id")
  public _id: string | undefined;

  @Property()
  public name: string | undefined;

  @Property()
  public plateNumber: string | undefined;

  @Property()
  public type: string | undefined;

  @Property()
  public color: string | undefined;

  @Property()
  public registrationNumber: string | undefined;

  @Property()
  @Default(Date.now())
  public dateCreated: Date = new Date();
}
