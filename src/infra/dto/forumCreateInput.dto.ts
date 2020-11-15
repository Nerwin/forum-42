import { IsString, IsHexadecimal } from 'class-validator';

import { Forum } from '../models';

export class ForumCreateInput implements Partial<Forum> {
  @IsString()
  public name: string;

  @IsHexadecimal()
  public creatorId: string;
}
