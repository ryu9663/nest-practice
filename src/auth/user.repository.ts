import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/user-entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  private userRepository: Repository<User>;

  constructor(private readonly dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
