import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'src/configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { AppService } from 'src/app.service';
import { AppController } from 'src/app.controller';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
