import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bye World';
  }
  getHello3(): string {
    return 'Hello Nest';
  }
}
