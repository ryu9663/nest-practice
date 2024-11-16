import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthCredentialDto } from 'src/auth/dto/auth-credential.dto';
import { User } from 'src/auth/user.entity';
import { UserRepository } from 'src/auth/user.repository';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async signUp(authCredential: AuthCredentialDto): Promise<User> {
    const { username, password } = authCredential;

    if (!username || !password) {
      throw new BadRequestException('Username and password are required');
    }

    // 중복 사용자 검사
    const existingUser = await this.userRepository.findByUsername(username);
    if (existingUser) {
      throw new BadRequestException('Username already exists');
    }

    const newUser = await this.userRepository.createUser({
      username,
      password,
    });
    return newUser;
  }
}
