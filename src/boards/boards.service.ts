import { Injectable } from '@nestjs/common';
import { Board } from 'src/boards/board.entity';
import { BoardsRepository } from 'src/boards/board.repository';
import { CreateBoardDto } from 'src/boards/dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(private readonly boardsRepository: BoardsRepository) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardsRepository.getBoardById(id);

    if (!found) {
      throw new Error('Board not found');
    }

    return found;
  }

  async createBoard(createBoard: CreateBoardDto): Promise<Board> {
    const { title, description, status } = createBoard;

    const board = this.boardsRepository.createBoard({
      title,
      description,
      status,
    });

    return board;
  }
}
