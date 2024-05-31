import { Body, Injectable, Req, Request } from '@nestjs/common';
import { Res } from '@nestjs/common';
import { Response } from 'express';
import { RequestData } from './RequestData';
import { json } from 'stream/consumers';


@Injectable()
export class AppService {
  getHello(@Res() res: Response, @Body() requestData: RequestData) {
    setTimeout(() => {
      return res.send(JSON.stringify({answer: requestData.answer}));
    }, requestData.wait); 
    }
}
