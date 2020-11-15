import { IsString, IsNotEmpty, IsHexadecimal, Length } from 'class-validator';

import { Message } from '../models';

export class MessageCreateInput implements Partial<Message> {
  @IsString()
  @IsNotEmpty()
  @Length(1, 500)
  public body: string;

  @IsHexadecimal()
  @IsNotEmpty()
  public userId: string;

  @IsNotEmpty()
  @IsHexadecimal()
  public forumId: string;
}
