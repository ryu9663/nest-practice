import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from 'src/users/dto/verify-email.dto';
import { UserLoginDto } from 'src/users/dto/user-info.dto';

interface UserInfo {
  id: string;
  email: string;
  password: string;
}

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<void> {
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    if (userId === '1') {
      return {
        id: '1',
        email: 'ff@kk.com',
        password: '123456',
      };
    }
    console.log('하이', userId);
    return;
  }
}
