import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from 'src/boards/board.entity';
import { BoardsRepository } from 'src/boards/board.repository';
import { CreateBoardDto } from 'src/boards/dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(private readonly boardsRepository: BoardsRepository) {}

  async getAllBoards(): Promise<Board[]> {
    const boards = await this.boardsRepository.getAllBoards();

    return boards;
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardsRepository.getBoardById(id);

    if (!found) {
      throw new NotFoundException(`Board with ID ${id} not found`);
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

  async deleteBoard(id: number): Promise<void> {
    const deleteResult = await this.boardsRepository.deleteBoard(id);

    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Board with ID ${id} not found`);
    }
  }
}
