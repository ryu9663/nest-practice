import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from 'src/boards/board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly ALLOWED_STATUS = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any) {
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status`);
    }

    value = value.toUpperCase();
    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.ALLOWED_STATUS.indexOf(status);
    return idx !== -1;
  }
}
