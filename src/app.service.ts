import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '건강검진 하러 오셨습니까';
  }
}
