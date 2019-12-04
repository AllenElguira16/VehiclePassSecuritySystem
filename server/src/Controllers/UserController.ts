import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Inject,
  BodyParams,
  PathParams,
} from '@tsed/common'
import { User } from 'Model/User'
import { MongooseModel } from '@tsed/mongoose'
import { Response, UserInput } from 'type'
import { ObjectId } from 'mongodb'
import { History } from 'Model/History'
import ArduinoService from 'Services/ArduinoService'

interface PathParamsInterface {
  id: string
  value: string
}

interface BodyParamsInterface extends UserInput {
  id: string
}

@Controller('/user')
class UserController {
  // Inject MongooseModel
  constructor(
    @Inject(User) private user: MongooseModel<User>,
    @Inject(History) public history: MongooseModel<History>,
    private readonly arduinoService: ArduinoService,
  ) {}
  /**
   * Returns all or search Users base on keyword
   * @param params userParams
   */
  @Post('/fetch')
  public async getUser(
    @BodyParams() params: BodyParamsInterface,
  ): Promise<User[]> {
    if (Object.keys(params).length === 0) return await this.user.find().exec()
    let dbParams: keyof UserInput = 'licenseId'
    Object.keys(params).map(async key => (dbParams = key as keyof UserInput))
    const search = params[dbParams]
    return await this.user
      .find({
        [dbParams]: {
          $regex: new RegExp(`.*${search.toLocaleLowerCase()}.*`, 'i'),
        },
      })
      .exec()
  }

  @Post('/check')
  public async check(@BodyParams() { id }: BodyParamsInterface): Promise<
    Response
  > {
    try {
      if (!ObjectId.isValid(id)) {
        const createHisory = new this.history({
          type: 'error',
          msg: `Invalid ID: ID Entered ${id}`,
        })
        await createHisory.save()
        throw 'Not a valid ID'
      }
      const user = await this.user.findById(new ObjectId(id)).exec()
      if (user) {
        if (user.errors) {
          const createHisory = new this.history({
            type: 'error',
            msg: `LicenseID Mismatch: ID Entered ${id}`,
          })
          await createHisory.save()
          throw 'Not match'
        } else {
          const createHisory = new this.history({
            type: 'success',
            msg: `Vehicle Entery: A user with ID: ${id} has successfully enter the campus`,
          })
          await createHisory.save()
        }
      }
    } catch (error) {
      if (error) this.arduinoService.warn()
      return { error }
    }
    this.arduinoService.openBoomBarrier()
    return { success: true }
  }

  @Get('/get-id/:id')
  public async getID(@PathParams() { id }: PathParamsInterface): Promise<
    User[]
  > {
    return await this.user.find({ userId: { $regex: `.*${id}.*` } }).exec()
  }

  @Post()
  public async addUser(
    @BodyParams() params: BodyParamsInterface,
  ): Promise<Response> {
    const { firstname, lastname, type, licenseId } = params
    // const LicenseFormat = /^\w{3}-\w{2}-\w{6}$/gm
    try {
      // if (!LicenseFormat.test(licenseId))
      //   throw 'Incorrect license Format, it should be XXX-XXX-XXXXXX'
      // Check if empty
      if (licenseId === '' || firstname === '' || lastname === '')
        throw 'Inputs are Empty'
      // Check if user exists
      const count = await this.user.countDocuments({ licenseId })
      if (count !== 0) throw `User with license id ${licenseId} exists!`
      // Saving user to database
      const user = new this.user({ firstname, lastname, type, licenseId })
      await user.save()
    } catch (error) {
      if (error) return { error }
    }
    return { success: 'User added!' }
  }

  @Put()
  public async updateUser(
    @BodyParams() params: BodyParamsInterface,
  ): Promise<Response> {
    try {
      // Check inputs
      const { id, licenseId, firstname, lastname, type } = params
      // console.log(params)
      if (licenseId === '' || firstname === '' || lastname === '')
        throw 'All inputs are required'
      // Updating to database
      const user = await this.user.findByIdAndUpdate(id, {
        firstname,
        lastname,
        type,
        licenseId,
      })
      if (!user) throw 'Error updating user'
    } catch (error) {
      if (error) return { error }
    }
    return { success: 'User updated!' }
  }

  @Delete('/:id')
  public async deleteUser(
    @PathParams() params: PathParamsInterface,
  ): Promise<Response> {
    try {
      await this.user.findByIdAndRemove(params.id)
    } catch (error) {
      if (error) return { error }
    }
    return { success: 'Deleted Successfully' }
  }
}

export default UserController
