/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  Controller,
  Get,
  Post,
  // Delete,
  // Put,
  Inject,
  BodyParams,
} from '@tsed/common';
import { Vehicle } from '../Model/Vehicle';
import { MongooseModel } from '@tsed/mongoose';

@Controller('/vehicle')
class VehicleController {
  constructor(@Inject(Vehicle) private vehicle: MongooseModel<Vehicle>) {}

  @Get()
  public async get() {
    return await this.vehicle.find();
  }

  @Post()
  public async create(@BodyParams() params: any) {
    const { name, plateNumber, type, color, registrationNumber } = params;
    if (name && plateNumber && type && color && registrationNumber) {
      await this.vehicle.create(params, (error: any) => {
        if (error) return { error };
      });
      return { success: 'Created Successfully!' };
    } else {
      return { error: 'All Fields are Required!' };
    }
  }
}

export default VehicleController;
