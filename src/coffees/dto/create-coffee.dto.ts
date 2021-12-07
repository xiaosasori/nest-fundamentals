import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly branch: string;

  // `each: true` indicates that expected value is an array of string
  @IsString({ each: true })
  readonly flavors: string[];
}
