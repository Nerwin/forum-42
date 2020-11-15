import { IsString, IsNotEmpty, Length } from 'class-validator';

import { guidGenerator } from '../../utils/guidGenerator';

class Forum {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  creatorId: string;

  admins: string[];

  members: string[];

  constructor(name: string, creatorId: string) {
    this.id = guidGenerator();
    this.name = name;
    this.creatorId = creatorId;
    this.admins = [];
    this.members = [];
  }
}

export { Forum };
