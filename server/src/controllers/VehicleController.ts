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
  Put,
} from '@tsed/common';
import { Vehicle } from 'Model/Vehicle';
import { MongooseModel } from '@tsed/mongoose';
import { VehicleInterface, Response } from 'type';

interface PathParamsInterface {
  id: string;
  value: string;
  search: string;
}

interface BodyParamsInterface extends VehicleInterface {
  id: string;
}

@Controller('/vehicle')
class VehicleController {
  constructor(@Inject(Vehicle) private vehicle: MongooseModel<Vehicle>) {}

  @Get()
  public async get(): Promise<Vehicle[]> {
    return await this.vehicle.find();
  }

  @Get('/:search')
  public async search(@PathParams() { search }: PathParamsInterface): Promise<Vehicle[]> {
    return await this.vehicle.find({ plateNumber: { $regex: `.*${search}.*` } }).exec();
  }

  @Post()
  public async create(@BodyParams() params: BodyParamsInterface): Promise<Response> {
    const { userId, name, plateNumber, type, color, registrationNumber } = params;
    if (userId && name && plateNumber && type && color && registrationNumber) {
      // Check PlateNumbers' Uniqueness
      const plateNumberMatcher = await this.vehicle.findOne({ plateNumber }).exec();
      if (plateNumberMatcher) return { error: 'Plate Number is not unique' };
      const registrationNumberMatcher = await this.vehicle.findOne({ registrationNumber }).exec();
      if (registrationNumberMatcher) return { error: 'Registration Number is not unique' };
      // Create Vehicle
      const vehicle = await this.vehicle.create(params);
      if (vehicle.errors) return { error: vehicle.errors };
      return { success: 'Created Successfully!' };
    }
    return { error: 'All Fields are Required!' };
  }

  @Put()
  public async update(@BodyParams() params: BodyParamsInterface): Promise<Response> {
    const { id, userId, name, plateNumber, type, color, registrationNumber } = params;
    if (userId && name && plateNumber && type && color && registrationNumber) {
      const vehicle = await this.vehicle.findByIdAndUpdate(id, params).exec();
      if (vehicle) {
        if (vehicle.errors) return { error: vehicle.errors };
        return { success: 'Updated Successfully!' };
      }
    }
    return { error: 'All Fields are Required!' };
  }

  @Delete('/:id')
  public async delete(@PathParams() { id }: { id: string }): Promise<Response> {
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
