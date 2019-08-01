import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';

@Controller('api/arduino')
class ArduinoController{
  @Get('open-light')
  openLight(request: Request, response: Response) {
    response.send('open!');
  }
}

export default new ArduinoController();