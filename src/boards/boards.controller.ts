import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from 'src/boards/board.model';
import { BoardsService } from 'src/boards/boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  @Get('/')
  async getAllBoards(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  async createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Promise<Board> {
    return this.boardsService.createBoard({
      title,
      description,
    });
  }
}
