import { IsNotEmpty } from 'class-validator';

export class UserInfoDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  grade: string;
  @IsNotEmpty()
  introduction: string;
}
