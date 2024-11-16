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

    const newUser = await this.userRepository.createUser({
      username,
      password,
    });
    return newUser;
  }
}
