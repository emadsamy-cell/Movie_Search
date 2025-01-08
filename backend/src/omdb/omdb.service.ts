import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OmdbService {
  private readonly baseUrl = 'https://www.omdbapi.com/';

  constructor(private readonly httpService: HttpService) {}

  async searchMovies(query: any) {
    const { title, page } = query;
    const response = await lastValueFrom(
      this.httpService.get(this.baseUrl, {
        params: {
          apikey: process.env.OMDB_API_KEY,
          s: title,
          page: page || 1,
        },
      }),
    );
    if (response.data.Response === 'False') {
      throw new HttpException(response.data.Error, HttpStatus.NOT_FOUND);
    }
    return {
      success: true,
      data: response.data.Search,
    };
  }
}
