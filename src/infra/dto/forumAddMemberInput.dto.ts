import { IsHexadecimal } from 'class-validator';

export class ForumAddMemberInput {
  @IsHexadecimal()
  public id: string;

  @IsHexadecimal()
  public memberId: string;
}
