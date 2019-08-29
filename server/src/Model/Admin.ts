import { Model, ObjectID } from "@tsed/mongoose";
import { Property } from "@tsed/common";

@Model()
export class Admin {
  @ObjectID("id")
  public _id: string | undefined;

  @Property()
  public username: string | undefined;

  @Property()
  public password: string | undefined;
}
