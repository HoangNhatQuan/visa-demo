import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { Trim } from '../../common/decorators/trim.decorator';

export class CreateOperatorDto {
  @Trim()
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  @MaxLength(100)
  password!: string;

  @Trim()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name!: string;
}
