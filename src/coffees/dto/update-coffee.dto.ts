import { PartialType } from '@nestjs/swagger';
import { CreateCoffeeDto } from './create-coffee.dto';

// PartialType marks all of the fields as optional and inherits all of
// the validation rules it's applied
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
  // readonly name?: string;
  // readonly branch?: string;
  // readonly flavors?: string[];
}
