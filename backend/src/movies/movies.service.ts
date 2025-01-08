import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async create(createMovieDto: any) {
    try {
      console.log(createMovieDto);
      const favoriteMovie = await this.prisma.movie.create({
        data: createMovieDto,
      });

      return {
        success: true,
        message: 'Movie created',
        movie: favoriteMovie,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Movie not created',
        error: error.meta.cause,
      };
    }
  }

  async findAll(page: any) {
    try {
      const limit = 10;
      const skip = (page - 1) * limit || 0;
      const movies = await this.prisma.movie.findMany({
        where: {},
        skip: skip,
        take: limit,
      });
      return {
        success: true,
        message: 'Movies found',
        data: movies,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Movies not found',
        error: error,
      };
    }
  }

  async update(id: any, updateMovieDto: any) {
    try {
      const updatedMovie = await this.prisma.movie.update({
        where: { id: id },
        data: updateMovieDto,
      });

      return {
        success: true,
        message: 'Movie updated',
        data: updatedMovie,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Movie not updated',
        error: error,
      };
    }
  }

  async remove(id: any) {
    try {
      await this.prisma.movie.delete({
        where: { id: id },
      });

      return {
        success: true,
        message: 'Movie deleted',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Movie not deleted',
        error: error,
      };
    }
  }
}
