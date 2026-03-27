import { IsEnum } from 'class-validator';
import { VisaApplicationStatus } from '@prisma/client';
import { Trim } from '../../common/decorators/trim.decorator';

export class UpdateVisaApplicationStatusDto {
  @Trim({ toUpperCase: true })
  @IsEnum(VisaApplicationStatus)
  status!: VisaApplicationStatus;
}
