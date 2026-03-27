import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthGuard } from '../auth/guards/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import type { JwtPayload } from '../auth/auth.service';
import { CreateVisaApplicationDto } from './dto/create-visa-application.dto';
import { CreateVisaApplicationNoteDto } from './dto/create-visa-application-note.dto';
import { ListVisaApplicationsQueryDto } from './dto/list-visa-applications-query.dto';
import { UpdateVisaApplicationStatusDto } from './dto/update-visa-application-status.dto';
import { VisaApplicationsService } from './visa-applications.service';

@Controller('visa-applications')
@UseGuards(AuthGuard, RolesGuard)
export class VisaApplicationsController {
  constructor(
    private readonly visaApplicationsService: VisaApplicationsService,
  ) {}

  @Post()
  @Roles(Role.ADMIN)
  async createApplication(@Body() dto: CreateVisaApplicationDto) {
    return this.visaApplicationsService.createApplication(dto);
  }

  @Get()
  async listApplications(@Query() query: ListVisaApplicationsQueryDto) {
    return this.visaApplicationsService.listApplications(query);
  }

  @Get(':id')
  async getApplicationDetail(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return this.visaApplicationsService.getApplicationDetail(id);
  }

  @Patch(':id/status')
  async updateApplicationStatus(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() dto: UpdateVisaApplicationStatusDto,
  ) {
    return this.visaApplicationsService.updateApplicationStatus(id, dto);
  }

  @Post(':id/notes')
  async addNote(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() dto: CreateVisaApplicationNoteDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.visaApplicationsService.addNote(id, dto, user.sub);
  }
}
