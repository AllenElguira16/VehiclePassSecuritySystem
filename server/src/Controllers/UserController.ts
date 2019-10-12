import { Controller, Get, Post, Delete, Put, Inject, BodyParams, PathParams } from '@tsed/common'
import { User } from 'Model/User'
import { MongooseModel } from '@tsed/mongoose'
// import { MySocketService } from 'Services/Socket';
import { Response, UserInput } from 'type'
import { ObjectId } from 'mongodb'
// import { ObjectID } from 'bson';

interface PathParamsInterface {
  id: string
  value: string
}

interface BodyParamsInterface extends UserInput {
  id: string
}

@Controller('/user')
class UserController {
  constructor(@Inject(User) private user: MongooseModel<User>) {}

  @Post('/fetch')
  public async getUser(@BodyParams() params: BodyParamsInterface): Promise<User[]> {
    if (Object.keys(params).length === 0) return await this.user.find().exec()
    let dbParams: keyof UserInput = 'licenseId'
    Object.keys(params).map(async key => (dbParams = key as keyof UserInput))
    const search = params[dbParams]
    return await this.user.find({ [dbParams]: { $regex: `.*${search}.*` } }).exec()
  }

  @Get('/:value')
  public async getUserBySearch(@PathParams() { value }: PathParamsInterface): Promise<User[]> {
    return await this.user.find({
      userId: new RegExp(`^${value}`, 'i'),
    })
  }

  @Post('/check')
  public async check(@BodyParams() { id }: BodyParamsInterface): Promise<Response> {
    if (!ObjectId.isValid(id)) return { error: 'Not a valid ID' }
    const user = await this.user.findById(new ObjectId(id)).exec()
    if (user && user.errors) return { error: 'Not match' }
    return { success: true }
  }

  @Get('/get-id/:id')
  public async getID(@PathParams() { id }: PathParamsInterface): Promise<User[]> {
    return await this.user.find({ userId: { $regex: `.*${id}.*` } }).exec()
  }

  @Post()
  public async addUser(@BodyParams() params: BodyParamsInterface): Promise<Response> {
    try {
      // Check if empty
      const { firstname, lastname, type, licenseId } = params
      if (licenseId === '' || firstname === '' || lastname === '') throw 'Inputs are Empty'
      // Check if user exists
      const count = await this.user.countDocuments({ licenseId })
      if (count !== 0) throw 'User already exists'
      // Saving user to database
      const user = new this.user({ firstname, lastname, type, licenseId })
      await user.save()
    } catch (error) {
      if (error) return { error }
    } finally {
      return { success: 'Created Successfully' }
    }
  }

  @Put()
  public async updateUser(@BodyParams() params: BodyParamsInterface): Promise<Response> {
    try {
      // Check inputs
      const { id, licenseId, firstname, lastname } = params
      if (licenseId === '' || firstname === '' || lastname === '') throw 'All inputs are required'
      // Updating to database
      await this.user.findByIdAndUpdate(id, { licenseId, firstname, lastname })
    } catch (error) {
      if (error) return { error }
    } finally {
      return { success: 'Updated Successfully' }
    }
  }

  @Delete('/:id')
  public async deleteUser(@PathParams() params: PathParamsInterface): Promise<Response> {
    try {
      this.user.findByIdAndRemove(params.id)
    } catch (error) {
      if (error) return { error }
    } finally {
      return { success: 'Deleted Successfully' }
    }
  }
}

export default UserController
