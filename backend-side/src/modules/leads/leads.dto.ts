import { IsString, IsEmail, IsOptional, IsNumber, IsDate, IsEnum, ValidateIf } from 'class-validator';
import { LeadSource, LeadLabel } from '@prisma/client';

export class CreateLeadDto {
    @IsOptional()
    @IsString()
    contactPerson: string;

    @IsString()
    organization: string;

    @IsOptional()
    @IsNumber()
    ownerId: number;

    @IsOptional()
    @IsString()
    ownerName: string;

    @IsOptional()
    @IsEnum(LeadSource)
    leadSource?: LeadSource;

    @IsOptional()
    @IsEnum(LeadLabel)
    leadLabel?: LeadLabel;

    @IsOptional()
    @IsDate()
    expectedCloseDate?: Date;

    @ValidateIf((o) => !o.email)
    @IsString({ message: 'Either phone or email must be provided.' })
    phone?: string;

    @ValidateIf((o) => !o.phone)
    @IsEmail({}, { message: 'Either phone or email must be provided.' })
    email?: string;
}