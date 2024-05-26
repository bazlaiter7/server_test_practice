import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/api/v1/request')
  getHello(@Req() request: Request) {
    setTimeout(()=>{
      console.log(request.body.answer);
      return request.body.answer;
    }, request.body.n)
  }
}
