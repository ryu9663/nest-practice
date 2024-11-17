import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthCredentialDto } from 'src/auth/dto/auth-credential.dto';
import { User } from 'src/auth/user.entity';
import { UserRepository } from 'src/auth/user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(authCredential: AuthCredentialDto): Promise<User> {
    const { username, password } = authCredential;

    if (!username || !password) {
      throw new BadRequestException('Username and password are required');
    }

    const newUser = await this.userRepository.createUser({
      username,
      password,
    });
    return newUser;
  }

  async signIn(
    authCredential: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredential;

    const user = await this.userRepository.findByUsername(username);
    const isMatching = await bcrypt.compare(password, user.password);

    if (user && isMatching) {
      // generate token ( Secret + Payload )
      const payload = { username };
      const accessToken = this.jwtService.sign(payload);

      return { accessToken };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}
