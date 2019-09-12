import { Controller, Get, Post, Delete, Put, Inject, BodyParams, PathParams } from '@tsed/common';
import { User } from 'Model/User';
import { MongooseModel } from '@tsed/mongoose';
// import { MySocketService } from 'Services/Socket';
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
  constructor(@Inject(User) private user: MongooseModel<User>) {}

  @Post('/fetch')
  public async getUser(@BodyParams() params: BodyParamsInterface): Promise<User[]> {
    if (Object.keys(params).length === 0) return await this.user.find().exec();
    let dbParams: keyof UserInterface = 'userId';
    Object.keys(params).map(async key => (dbParams = key as keyof UserInterface));
    const search = params[dbParams];
    return await this.user.find({ [dbParams]: { $regex: `.*${search}.*` } }).exec();
  }

  @Get('/:value')
  public async getUserBySearch(@PathParams() { value }: PathParamsInterface): Promise<User[]> {
    return await this.user.find({
      userId: new RegExp(`^${value}`, 'i'),
    });
  }

  @Get('/get-id/:id')
  public async getID(@PathParams() { id }: PathParamsInterface): Promise<User[]> {
    return await this.user.find({ userId: { $regex: `.*${id}.*` } }).exec();
  }

  @Post()
  public async addUser(@BodyParams() params: BodyParamsInterface): Promise<Response> {
    const { userId, firstname, lastname } = params;
    if (userId === '' || firstname === '' || lastname === '') return { error: 'All inputs are required' };

    const match = await this.user.find({ userId });
    if (match.length !== 0) return { error: 'User already exists' };
    const user = new this.user({ userId, firstname, lastname });
    user.save(error => ({ error }));
    return { success: 'Created Successfully' };
  }

  @Put()
  public async updateUser(@BodyParams() params: BodyParamsInterface): Promise<Response> {
    const { id, userId, firstname, lastname } = params;
    if (userId === '' || firstname === '' || lastname === '') return { error: 'All inputs are required' };
    this.user.findByIdAndUpdate(id, { userId, firstname, lastname }, error => {
      if (error) return { error };
    });
    // if (this.socket.nsp) this.socket.nsp.emit('fetchUser');
    return { success: 'Updated Successfully' };
  }

  @Delete('/:id')
  public async deleteUser(@PathParams() params: PathParamsInterface): Promise<Response> {
    this.user.findByIdAndRemove(params.id, error => {
      if (error) return { error };
    });
    // if (this.socket.nsp) this.socket.nsp.emit('fetchUser');
    return { success: 'Deleted Successfully' };
  }
}

export default UserController;
