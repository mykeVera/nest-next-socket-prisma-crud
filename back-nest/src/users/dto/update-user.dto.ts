export class UpdateUserDto {
  name?: string;
  email?: string;
}

// import { PartialType } from '@nestjs/mapped-types';
// import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {
//   id: number;
// }
