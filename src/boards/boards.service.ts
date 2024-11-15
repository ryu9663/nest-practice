import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/boards/board.entity';
import { BoardRepository } from 'src/boards/board.repository';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({ id });

    if (!found) {
      throw new Error('Board not found');
    }

    return found;
  }
}
