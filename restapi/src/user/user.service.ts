import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  private readonly items: IEmployee[] = [
    {
      employeeId: "awqeasd",
      firstname: "",
      lastname: "",
    },
  ];

  async fetch() {
    return this.items;
  }
}
