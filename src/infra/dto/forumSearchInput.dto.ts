import { IsHexadecimal, IsOptional } from 'class-validator';
import { Forum } from '../models';

export class ForumSearchInput implements Partial<Forum> {
  @IsHexadecimal()
  @IsOptional()
  public memberId?: string;

  @IsHexadecimal()
  @IsOptional()
  public creatorId?: string;
}
