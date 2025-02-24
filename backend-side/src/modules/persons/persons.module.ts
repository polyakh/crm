import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { PrismaService } from "~database";

@Module({
    providers: [PrismaService, PersonsService],
    controllers: [PersonsController],
})
export class PersonsModule {}