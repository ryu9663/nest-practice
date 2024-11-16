import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { AuthCredentialDto } from 'src/auth/dto/auth-credential.dto';
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
}
