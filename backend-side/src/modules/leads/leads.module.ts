import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import { PrismaService } from "~database";

@Module({
    providers: [PrismaService, LeadsService],
    controllers: [LeadsController],
})
export class LeadsModule {}