import { IsEnum, IsNotEmpty } from 'class-validator';
import { BoardStatus } from 'src/boards/board-status.enum';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;

  @IsEnum(BoardStatus, { message: 'Status must be either PUBLIC or PRIVATE' })
  status: BoardStatus = BoardStatus.PUBLIC; // 기본값 설정
}
