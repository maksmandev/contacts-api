import { IsNumberString } from 'class-validator';

export class FindId {
  @IsNumberString()
  id: number;
}