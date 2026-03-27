import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { VisaApplicationsController } from './visa-applications.controller';
import { VisaApplicationsService } from './visa-applications.service';

@Module({
  imports: [PrismaModule],
  controllers: [VisaApplicationsController],
  providers: [VisaApplicationsService],
})
export class VisaApplicationsModule {}
