import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The brand of a coffee' })
  @IsString()
  readonly branch: string;

  // `each: true` indicates that expected value is an array of string
  @ApiProperty({ example: [] })
  @IsString({ each: true })
  readonly flavors: string[];
}
