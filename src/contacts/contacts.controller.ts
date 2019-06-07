import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';
import { FindId } from './dto/id.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) { }

  @Get()
  index(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Post()
  @ApiOperation({ title: 'Create contact' })
  async create(@Body() contact: CreateContactDto): Promise<any> {
    return this.contactsService.create(contact);
  }

  @Put(':id')
  async update(@Param() params: FindId, @Body() contact: UpdateContactDto): Promise<any> {
    contact.id = Number(params.id);
    return this.contactsService.update(contact);
  }

  @Delete(':id')
  async delete(@Param() params: FindId): Promise<any> {
    return this.contactsService.delete(params.id);
  }

}
