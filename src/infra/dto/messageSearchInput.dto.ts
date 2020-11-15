import { IsHexadecimal, IsOptional } from 'class-validator';
import { MessageCreateInput } from './messageCreateInput.dto';

export class MessageSearchInput implements Partial<MessageCreateInput> {
  @IsHexadecimal()
  @IsOptional()
  public forumId?: string;

  @IsHexadecimal()
  @IsOptional()
  public userId?: string;
}
