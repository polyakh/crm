// person.controller.ts
import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    UseFilters,
    Query,
} from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Person as PersonModel } from '@prisma/client';
import { CreatePersonDto, UpdatePersonDto } from './persons.dto';
import { PersonsNotFoundException } from './persons-not-found.exception';

@Controller()
export class PersonsController {
    constructor(private readonly personService: PersonsService) {}

    @Get('person/:id')
    // @UseFilters(PersonNotFoundException)
    async getPerson(@Param('id') id: string): Promise<PersonModel> {
        const person = await this.personService.person(Number(id));
        if (!person) {
            throw new PersonsNotFoundException(id);
        }
        return person;
    }

    @Get('persons')
    async getPersons(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('sort') sort: string,
    ): Promise<PersonModel[]> {
        return this.personService.persons({
            skip: (page - 1) * limit,
            take: limit,
            orderBy: sort ? { [sort]: 'asc' } : undefined,
        });
    }

    @Post('person')
    async createPerson(@Body() createPersonDto: CreatePersonDto): Promise<PersonModel> {
        return this.personService.createPerson(createPersonDto);
    }

    @Put('person/:id')
    async updatePerson(
        @Param('id') id: string,
        @Body() updatePersonDto: UpdatePersonDto,
    ): Promise<PersonModel> {
        return this.personService.updatePerson({
            where: { id: Number(id) },
            data: updatePersonDto,
        });
    }

    @Delete('person/:id')
    async deletePerson(@Param('id') id: string): Promise<PersonModel> {
        return this.personService.deletePerson({ id: Number(id) });
    }
}