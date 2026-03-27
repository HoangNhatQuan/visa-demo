import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Trim } from '../../common/decorators/trim.decorator';

export class CreateVisaApplicationDto {
  @Trim()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  applicantName!: string;

  @Trim()
  @IsEmail()
  email!: string;

  @Trim()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  nationality!: string;

  @Trim()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  destinationCountry!: string;

  @Trim()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  visaType!: string;

  @Type(() => Date)
  @IsDate()
  travelDate!: Date;
}
