import {
  IsNotEmpty,
  IsString,
  Length,
  IsOptional,
  IsUrl,
  IsHexadecimal,
} from 'class-validator';

import { guidGenerator } from '../../utils/guidGenerator';

class User {
  @IsHexadecimal()
  @IsNotEmpty()
  id: string;

  @IsString()
  @Length(3, 30)
  name: string;

  @IsUrl()
  @IsOptional()
  pictureUri: string | undefined;

  @IsNotEmpty()
  createdAt: Date;

  constructor(name: string, pictureUri?: string) {
    this.id = guidGenerator();
    this.name = name;
    this.pictureUri = pictureUri;
    this.createdAt = new Date();
  }
}

export { User };
