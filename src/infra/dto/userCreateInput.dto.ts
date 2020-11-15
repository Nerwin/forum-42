import {
  IsString,
  IsNotEmpty,
  IsOptional,
  Length,
  IsUrl,
} from 'class-validator';

import { User } from '../models';

export class UserCreateInput implements Partial<User> {
  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  public name: string;

  @IsOptional()
  @IsUrl()
  public pictureUri: string;
}
