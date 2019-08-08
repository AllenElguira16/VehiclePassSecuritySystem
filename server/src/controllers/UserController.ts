import { Request, Response } from 'express';
import { Controller, Get, Post } from '@overnightjs/core';

@Controller('api/user')
class UserController{
  @Get()
  getUser(request: Request, response: Response) {
    response.send('Sent!');
  }

  @Post()
  signIn(request: Request, response: Response) {
    return response.send({success: true});
  }
}

export default new UserController();