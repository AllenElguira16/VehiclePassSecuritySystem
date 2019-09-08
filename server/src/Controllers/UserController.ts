import { Controller, Get, Post, Delete, Put, Inject, BodyParams, PathParams } from '@tsed/common';
import { User } from '../Model/User';
import { MongooseModel } from '@tsed/mongoose';
import { MySocketService } from '../Services/Socket';
import { Response, UserInterface } from 'type';

interface PathParamsInterface {
  id: string;
  value: string;
}

interface BodyParamsInterface extends UserInterface {
  id: string;
}

@Controller('/user')
class UserController {
  constructor(@Inject(User) private user: MongooseModel<User>, private socket: MySocketService) {}

  @Get()
  public async getUser(): Promise<User[]> {
    return await this.user.find().exec();
  }

  @Get('/:value')
  public async getUserBySearch(@PathParams() { value }: PathParamsInterface): Promise<User[]> {
    // if (value) {
    return await this.user.find({
      userId: new RegExp(`^${value}`, 'i'),
    });
    // }
  }

  @Post()
  public async addUser(@BodyParams() params: BodyParamsInterface): Promise<Response> {
    const { userId, firstname, lastname } = params;
    if (userId === '' || firstname === '' || lastname === '') return { error: 'All inputs are required' };

    const match = await this.user.find({ userId });
    if (match.length !== 0) return { error: 'User already exists' };
    const user = new this.user({ userId, firstname, lastname });
    user.save(error => ({ error }));
    if (this.socket.nsp) this.socket.nsp.emit('fetchUser');
    return { success: 'Created Successfully' };
  }

  @Put()
  public async updateUser(@BodyParams() params: BodyParamsInterface): Promise<Response> {
    const { id, userId, firstname, lastname } = params;
    if (userId === '' || firstname === '' || lastname === '') return { error: 'All inputs are required' };
    this.user.findByIdAndUpdate(id, { userId, firstname, lastname }, error => {
      if (error) return { error };
    });
    if (this.socket.nsp) this.socket.nsp.emit('fetchUser');
    return { success: 'Updated Successfully' };
  }

  @Delete('/:id')
  public async deleteUser(@PathParams() params: PathParamsInterface): Promise<Response> {
    this.user.findByIdAndRemove(params.id, error => {
      if (error) return { error };
    });
    if (this.socket.nsp) this.socket.nsp.emit('fetchUser');
    return { success: 'Deleted Successfully' };
  }
}

export default UserController;
