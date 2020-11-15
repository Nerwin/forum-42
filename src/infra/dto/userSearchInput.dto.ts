import { IsHexadecimal, IsOptional } from 'class-validator';
import { User } from '../models';

export class UserSearchInput implements Partial<User> {
  @IsHexadecimal()
  @IsOptional()
  public id: string;
}
