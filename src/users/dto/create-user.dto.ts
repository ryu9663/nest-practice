import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  grade: string;
  @IsNotEmpty()
  introduction: string;
}
