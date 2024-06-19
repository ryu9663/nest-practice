import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [BoardsModule],
  controllers: [UsersController],
})
export class AppModule {}
