import { Request } from 'express';
import {
  Header,
  BadRequestException,
  Controller,
  Get,
  Req,
  Redirect,
  Query,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HttpCode, Param } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { ApiControllerController } from './api-controller/api-controller.controller';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    // console.log(req);
    return this.appService.getHello();
  }
  @Header('Custom', 'Test Header')
  @Get(':id')
  findOne(@Param('id') id: string) {
    if (+id < 1) {
      throw new BadRequestException('id는 0보다 큰 값이어야 합니다.');
    }
    let users = new UsersService().findOne(Number(id));
    return users;
  }

  @Delete(':userId/memo/:memoId')
  delelteUserMemo(
    @Param('userId') userId: string,
    @Param('memoId') memoId: string,
  ) {
    return `userId: ${userId}, memoId:${memoId}`;
  }
}
@Controller({ host: 'api.example.com' })
export class ApiController {
  @Get()
  index(): string {
    return 'Hello,Api';
  }
}
