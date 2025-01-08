import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OmdbService } from './omdb.service';
import { OmdbController } from './omdb.controller';

@Module({
  imports: [HttpModule],
  controllers: [OmdbController],
  providers: [OmdbService],
})
export class OmdbModule {}
