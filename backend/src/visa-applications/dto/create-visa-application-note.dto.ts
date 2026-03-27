import { IsString, MaxLength, MinLength } from 'class-validator';
import { Trim } from '../../common/decorators/trim.decorator';

export class CreateVisaApplicationNoteDto {
  @Trim()
  @IsString()
  @MinLength(1)
  @MaxLength(2000)
  content!: string;
}
