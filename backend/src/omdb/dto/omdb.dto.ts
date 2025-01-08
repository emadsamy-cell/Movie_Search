import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class queryDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  page: string;
}
