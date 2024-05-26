import { Injectable, Req } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(@Req() request: Request): void {
    
  }
}
