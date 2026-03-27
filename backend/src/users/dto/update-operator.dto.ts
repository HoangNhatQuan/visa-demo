import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Trim } from '../../common/decorators/trim.decorator';

export class UpdateOperatorDto {
  @IsOptional()
  @Trim()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(100)
  password?: string;

  @IsOptional()
  @Trim()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name?: string;
}
