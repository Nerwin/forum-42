import {
  IsString,
  IsNotEmpty,
  Length,
  IsHexadecimal,
  IsArray,
} from 'class-validator';

import { guidGenerator } from '../../utils/guidGenerator';

class Forum {
  @IsHexadecimal()
  @IsNotEmpty()
  id: string;

  @IsString()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  creatorId: string;

  @IsArray()
  members: string[];

  constructor(name: string, creatorId: string) {
    this.id = guidGenerator();
    this.name = name;
    this.creatorId = creatorId;
    this.members = [];
  }
}

export { Forum };
