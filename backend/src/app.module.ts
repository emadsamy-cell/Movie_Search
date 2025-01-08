import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { OmdbService } from './omdb/omdb.service';
import { MoviesModule } from './movies/movies.module';
import { OmdbModule } from './omdb/omdb.module';

@Module({
  imports: [AuthModule, PrismaModule, MoviesModule, OmdbModule],
})
export class AppModule {}
