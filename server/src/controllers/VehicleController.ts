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
  PathParams,
  Delete,
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
      // Check PlateNumbers' Uniqueness
      const plateNumberMatcher = await this.vehicle.findOne({ plateNumber }).exec();
      if (plateNumberMatcher) return { error: 'Plate Number is not unique' };
      const registrationNumberMatcher = await this.vehicle.findOne({ registrationNumber }).exec();
      if (registrationNumberMatcher) return { error: 'Registration Number is not unique' };
      // Create Vehicle
      const vehicle = await this.vehicle.create(params);
      if (vehicle.errors) return { error: vehicle.errors };
      return { success: 'Created Successfully!' };
    } else {
      return { error: 'All Fields are Required!' };
    }
  }

  @Delete('/:id')
  public async delete(@PathParams() { id }: { id: string }): Promise<any> {
    if (id) {
      this.vehicle.findByIdAndDelete(id, error => {
        if (error) return { error };
      });
      return { success: 'Deleted Successfully!' };
    }
    return { error: 'Error while deleting' };
  }
}

export default VehicleController;
