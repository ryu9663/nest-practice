import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthCredentialDto } from 'src/auth/dto/auth-credential.dto';
import { UserRepository } from 'src/auth/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepository: UserRepository) {
    super({
      secretOrKey: 'Secret1234',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: AuthCredentialDto) {
    const { username } = payload;
    const user = await this.userRepository.findByUsername(username);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }
}
