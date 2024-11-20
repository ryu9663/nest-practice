import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { AuthCredentialDto } from 'src/auth/dto/auth-credential.dto';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED) // 201 상태 코드 명시
  @UsePipes(ValidationPipe)
  async signUp(
    @Body() authCredentialDto: AuthCredentialDto,
  ): Promise<{ message: string; user: Partial<User> }> {
    const user = await this.authService.signUp(authCredentialDto);
    return { message: 'User successfully registered', user }; // 성공 메시지 반환
  }

  @Post('/signin')
  @HttpCode(HttpStatus.OK) // 200 상태 코드 명시
  async signIn(@Body() authCredentialDto: AuthCredentialDto): Promise<{
    message: string;
    data: {
      accessToken: string;
    };
  }> {
    const accessToken = await this.authService.signIn(authCredentialDto);
    return { message: 'User successfully logged in', data: accessToken };
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log('리퀘', user);
  }
}
