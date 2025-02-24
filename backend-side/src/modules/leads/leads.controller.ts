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
import { LeadsService } from './leads.service';
import { Lead as LeadModel } from '@prisma/client';
import { CreateLeadDto } from './leads.dto';
import { LeadsNotFoundException } from './leads-not-found.exception';

@Controller()
export class LeadsController {
    constructor(private readonly leadsService: LeadsService) {}

    @Get('lead/:id')
    // @UseFilters(PersonNotFoundException)
    async getPerson(@Param('id') id: string): Promise<LeadModel> {
        const person = await this.leadsService.lead(Number(id));
        if (!person) {
            throw new LeadsNotFoundException(id);
        }
        return person;
    }

    @Get('leads')
    async getPersons(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('sort') sort: string,
    ): Promise<LeadModel[]> {
        return this.leadsService.leads({
            skip: (page - 1) * limit,
            take: limit,
            orderBy: sort ? { [sort]: 'asc' } : undefined,
        });
    }

    @Post('leads')
    async createPerson(@Body() createLeadDto: CreateLeadDto): Promise<LeadModel> {
        return this.leadsService.createLead(createLeadDto);
    }

    // @Put('person/:id')
    // async updatePerson(
    //     @Param('id') id: string,
    //     @Body() updatePersonDto: UpdatePersonDto,
    // ): Promise<PersonModel> {
    //     return this.personService.updatePerson({
    //         where: { id: Number(id) },
    //         data: updatePersonDto,
    //     });.
    // }

    @Delete('lead/:id')
    async deletePerson(@Param('id') id: string): Promise<LeadModel> {
        return this.leadsService.deleteLead({ id: Number(id) });
    }
}