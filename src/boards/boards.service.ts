import { v1 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from 'src/boards/board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard({
    title,
    description,
  }: Pick<Board, 'title' | 'description'>): Board {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
}
