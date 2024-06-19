import { Controller, Get, Param } from '@nestjs/common';

interface BoardInfo {
  id: string;
  title: string;
  content: string;
}

@Controller('boards')
export class BoardsController {
  @Get('/:id')
  async getBoardInfo(@Param('id') boardId: string): Promise<BoardInfo> {
    if (boardId === '1') {
      return {
        id: '1',
        title: '보드 제목',
        content: '보드 내용',
      };
    }
    console.log('하이', boardId);
    return;
  }
}
