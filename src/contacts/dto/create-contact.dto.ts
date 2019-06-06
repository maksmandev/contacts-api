import { IsNotEmpty, IsEmail, IsPhoneNumber, Min, Length } from 'class-validator';

export class CreateContactDto {
  id: number

  @Length(2)
  firstName: string;

  @Length(2)
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsPhoneNumber('UA')
  phone: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  country: string;
}