import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { BoardStatus } from 'src/boards/board-status.enum';
import { Board } from 'src/boards/board.entity';
import { CreateBoardDto } from 'src/boards/dto/create-board.dto';
import { DataSource, DeleteResult, Repository } from 'typeorm';

@Injectable()
export class BoardsRepository {
  private boardsRepository: Repository<Board>;

  constructor(private readonly dataSource: DataSource) {
    this.boardsRepository = this.dataSource.getRepository(Board);
  }

  async getAllBoards(): Promise<Board[]> {
    return this.boardsRepository.find();
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardsRepository.findOneBy({ id });

    return found;
  }

  async createBoard(createBoard: CreateBoardDto, user: User) {
    const { title, description, status = BoardStatus.PUBLIC } = createBoard;
    const newBoard = this.boardsRepository.create({
      title,
      description,
      status,
      user,
    });
    await this.boardsRepository.save(newBoard);
    return newBoard;
  }

  async deleteBoard(id: number, user: User): Promise<DeleteResult> {
    const result = await this.boardsRepository.delete({ id, user });
    return result;
  }

  async saveBoard(board: Board): Promise<Board> {
    return this.boardsRepository.save(board);
  }
}
