import { Injectable } from '@nestjs/common';
import { BoardStatus } from 'src/boards/board-status.enum';
import { Board } from 'src/boards/board.entity';
import { CreateBoardDto } from 'src/boards/dto/create-board.dto';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class BoardsRepository {
  private boardsRepository: Repository<Board>;

  constructor(private readonly dataSource: DataSource) {
    this.boardsRepository = this.dataSource.getRepository(Board);
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardsRepository.findOneBy({ id });

    if (!found) {
      throw new Error('Board not found');
    }

    return found;
  }

  async createBoard(createBoard: CreateBoardDto) {
    const { title, description, status = BoardStatus.PUBLIC } = createBoard;
    const newBoard = this.boardsRepository.create({
      title,
      description,
      status,
    });
    await this.boardsRepository.save(newBoard);
    return newBoard;
  }
}
