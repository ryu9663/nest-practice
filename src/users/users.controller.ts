import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInfoDto } from 'src/users/dto/user-info.dto';

const USERS = [
  {
    username: '장동건',
    id: '1',
    grade: '4.5',
    introduction:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
  },
  {
    username: '장동건2',
    id: '2',
    grade: '4.5',
    introduction:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
  },
  {
    username: '장동건3',
    id: '3',
    grade: '4.5',
    introduction:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
  },
  {
    username: '장동건4',
    id: '4',
    grade: '4.5',
    introduction:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
  },
  {
    username: '장동건5',
    id: '5',
    grade: '4.5',
    introduction:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
  },
  {
    username: '장동건6',
    id: '6',
    grade: '4.5',
    introduction:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
  },
  {
    username: '장동건7',
    id: '7',
    grade: '4.5',
    introduction:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
  },
];
@Controller('users')
export class UsersController {
  @Get()
  async getUsers(): Promise<UserInfoDto[]> {
    return USERS;
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  // @Post('/email-verify')
  // async verifyEmail(@Query() dto: VerifyEmailDto): Promise<void> {
  //   console.log(dto);
  //   return;
  // }

  // @Post('/login')
  // async login(@Body() dto: UserInfoDto): Promise<string> {
  //   console.log(dto);

  //   return;
  // }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfoDto> {
    if (userId === '1') {
      return {
        username: '장동건',
        id: '1',
        grade: '4.5',
        introduction:
          '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
      };
    }
    console.log('하이', userId);
    return;
  }
}
