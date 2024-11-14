import { Controller } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  //   constructor(private boardsService: BoardsService) {}
  //   @Get('/')
  //   async getAllBoards(): Promise<Board[]> {
  //     return this.boardsService.getAllBoards();
  //   }
  //   @Post('/')
  //   @UsePipes(ValidationPipe)
  //   async createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
  //     return this.boardsService.createBoard(createBoardDto);
  //   }
  //   @Get('/:id')
  //   getBoardById(@Param('id') id: string): Board {
  //     return this.boardsService.getBoardById(id);
  //   }
  //   @Delete('/:id')
  //   deleteBoard(@Param('id') id: string): void {
  //     this.boardsService.deleteBoard(id);
  //   }
}
