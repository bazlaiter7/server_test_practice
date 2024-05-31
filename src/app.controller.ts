import { Body, Controller, Get, Post, Req, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { Res } from '@nestjs/common';
import { Response } from 'express';
import { RequestData } from './RequestData';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/api/v1/request')
  async delayResponse(@Res() res: Response, @Body() requestData: RequestData) {
    return this.appService.getHello(res, requestData);
  }
}
