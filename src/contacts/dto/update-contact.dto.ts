import { IsEmail, IsPhoneNumber, IsOptional, Length } from 'class-validator';

export class UpdateContactDto {

  id: number

  @IsOptional()
  @Length(2)
  firstName: string;

  @IsOptional()
  @Length(2)
  lastName: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber('UA')
  phone: string;

  city: string;

  country: string;
}