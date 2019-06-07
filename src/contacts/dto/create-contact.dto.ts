import { IsNotEmpty, IsEmail, IsPhoneNumber, Min, Length } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class CreateContactDto {
  id: number

  @ApiModelProperty()
  @Length(2)
  firstName: string;

  @ApiModelProperty()
  @Length(2)
  lastName: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiModelProperty()
  @IsPhoneNumber('UA')
  phone: string;
  
  @ApiModelProperty()
  @IsNotEmpty()
  city: string;
  
  @ApiModelProperty()
  @IsNotEmpty()
  country: string;
}