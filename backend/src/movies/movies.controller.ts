import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { createMovieDto, findAllQuery, updateMovieDto } from './dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: createMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll(@Query() page: findAllQuery) {
    return this.moviesService.findAll(page);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() updateMovieDto: updateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.moviesService.remove(id);
  }
}
