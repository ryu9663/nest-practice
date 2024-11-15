import { Controller, Get, Param } from '@nestjs/common';
import { Board } from 'src/boards/board.entity';
import { BoardsService } from 'src/boards/boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }
}
