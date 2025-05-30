import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthCredentialDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsNotEmpty()
  // 영어랑 숫자만 가능한 유효성체크
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and numbers',
  })
  password: string;
}
