import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthGuard } from '../auth/guards/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateOperatorDto } from './dto/create-operator.dto';
import { UpdateOperatorDto } from './dto/update-operator.dto';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
@Roles(Role.ADMIN)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('operators')
  listOperators() {
    return this.usersService.listOperators();
  }

  @Post('operators')
  createOperator(@Body() dto: CreateOperatorDto) {
    return this.usersService.createOperator(dto);
  }

  @Patch('operators/:id')
  updateOperator(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() dto: UpdateOperatorDto,
  ) {
    return this.usersService.updateOperator(id, dto);
  }

  @Delete('operators/:id')
  deleteOperator(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.usersService.deleteOperator(id);
  }
}
