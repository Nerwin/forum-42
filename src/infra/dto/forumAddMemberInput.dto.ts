import { IsHexadecimal } from 'class-validator';

export class ForumAddMemberInput {
  @IsHexadecimal()
  public forumId: string;

  @IsHexadecimal()
  public memberId: string;
}
