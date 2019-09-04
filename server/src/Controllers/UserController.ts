/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Get, Post, Delete, Put, Inject, BodyParams, PathParams } from '@tsed/common';
import { User } from '../Model/User';
import { MongooseModel } from '@tsed/mongoose';
import { MySocketService } from '../Services/Socket';
// import { Request, Response } from "express";
// import User from "../Models/User";

@Controller('/user')
class UserController {
  constructor(@Inject(User) private user: MongooseModel<any>, private socket: MySocketService) {}

  @Get()
  public async getUser() {
    return await this.user.find();
  }

  @Get('/:value')
  public async getUserBySearch(@PathParams() { value }: any) {
    if (value) {
      return await this.user.find({
        userId: new RegExp(`^${value}`, 'i'),
      });
    }
  }

  @Post()
  public async addUser(@BodyParams() params: any) {
    const { userId, firstname, lastname } = params;
    if (userId === '' || firstname === '' || lastname === '') return { error: 'All inputs are required' };

    const match = await this.user.find({ userId });
    if (match.length !== 0) return { error: 'User already exists' };
    const user = new this.user({ userId, firstname, lastname });
    user.save((error: any) => ({ error }));
    if (this.socket.nsp) this.socket.nsp.emit('fetchUser');
    return { success: 'Created Successfully' };
  }

  @Put()
  public async updateUser(@BodyParams() params: any) {
    const { id, userId, firstname, lastname } = params;
    if (userId === '' || firstname === '' || lastname === '') return { error: 'All inputs are required' };
    this.user.findByIdAndUpdate(id, { userId, firstname, lastname }, error => {
      if (error) return { error };
    });
    if (this.socket.nsp) this.socket.nsp.emit('fetchUser');
    return { success: 'Updated Successfully' };
  }

  @Delete('/:id')
  public async deleteUser(@PathParams() params: any) {
    this.user.findByIdAndRemove(params.id, error => {
      if (error) return { error };
    });
    if (this.socket.nsp) this.socket.nsp.emit('fetchUser');
    return { success: 'Deleted Successfully' };
  }
}

export default UserController;
