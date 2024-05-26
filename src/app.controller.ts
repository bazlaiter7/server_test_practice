import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/api/v1/request')
  getHello(@Req() request: Request) {
    
    if(request.body.wait < 0){
      console.log("error, wait too few");
      return "error, wait too few";
    }
    if(request.body.answer.length < 3){
      console.log("error, answer string is too few");
      return "error, answer string is too few";
    }
    setTimeout(()=>{
      console.log(request.body.answer);
      return request.body.answer;
    }, request.body.wait)
  }
}
