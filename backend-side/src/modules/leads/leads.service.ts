import { Injectable } from '@nestjs/common';
import { PrismaService } from "~database";
import { Lead, Prisma } from '@prisma/client';

@Injectable()
export class LeadsService {
    constructor(private prisma: PrismaService) {}

    async lead(id: number): Promise<Lead | undefined> {
        return this.prisma.lead.findUnique({
            where: { id },
        });
    }

    async leads(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.LeadWhereUniqueInput;
        where?: Prisma.LeadWhereInput;
        orderBy?: Prisma.LeadOrderByWithRelationInput;
    }): Promise<Lead[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.lead.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createLead(data: Prisma.LeadCreateInput): Promise<Lead> {
        const plainData = { ...data };
        console.log('!!!!plainData', plainData);
        return this.prisma.lead.create({
            data: plainData,
        });
    }

    async updateLead(params: {
        where: Prisma.LeadWhereUniqueInput;
        data: Prisma.LeadUpdateInput;
    }): Promise<Lead> {
        const { where, data } = params;
        return this.prisma.lead.update({
            data,
            where,
        });
    }

    async deleteLead(where: Prisma.LeadWhereUniqueInput): Promise<Lead> {
        return this.prisma.lead.delete({
            where,
        });
    }
}