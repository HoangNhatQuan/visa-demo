import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { VisaApplicationStatus } from '@prisma/client';
import { Trim } from '../../common/decorators/trim.decorator';

export class ListVisaApplicationsQueryDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  @Trim({ emptyToUndefined: true })
  q?: string;

  @IsOptional()
  @IsEnum(VisaApplicationStatus)
  @Trim({ emptyToUndefined: true, toUpperCase: true })
  status?: VisaApplicationStatus;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  limit: number = 10;
}
