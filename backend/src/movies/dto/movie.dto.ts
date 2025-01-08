import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class createMovieDto {
  @IsString()
  @IsNotEmpty()
  Title: string;

  @IsString()
  @IsNotEmpty()
  Poster: string;

  @IsString()
  @IsNotEmpty()
  Year: string;
}

export class updateMovieDto {
  @IsString()
  @IsOptional()
  Title: string;

  @IsString()
  @IsOptional()
  Poster: string;

  @IsString()
  @IsOptional()
  Year: string;
}

export class findAllQuery {
  @IsString()
  @IsOptional()
  page: string;
}
