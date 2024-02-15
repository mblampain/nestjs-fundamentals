import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TeasService } from './teas.service';
import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';

@Controller('teas')
export class TeasController {
  public constructor(private readonly teasService: TeasService) {}

  @Get()
  public findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.teasService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.teasService.findOne(id);
  }

  @Post()
  public create(@Body() createTeaDto: CreateTeaDto) {
    return this.teasService.create(createTeaDto);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updateTeaDto: UpdateTeaDto) {
    return this.teasService.update(id, updateTeaDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.teasService.remove(id);
  }
}
