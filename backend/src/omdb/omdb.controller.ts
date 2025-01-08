import { Controller, Get, Query } from '@nestjs/common';
import { OmdbService } from './omdb.service';
import { queryDto } from './dto';

@Controller('omdb')
export class OmdbController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get('search')
  async searchMovies(@Query() query: queryDto) {
    return this.omdbService.searchMovies(query);
  }
}
