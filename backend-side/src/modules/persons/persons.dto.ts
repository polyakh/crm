import { IsString, IsEmail, IsOptional, IsArray, IsBoolean, IsNumber, IsDate, IsObject } from 'class-validator';

export class CreatePersonDto {
    @IsEmail()
    ccEmail: string;

    @IsBoolean()
    activeFlag: boolean;

    @IsString()
    name: string;

    @IsArray()
    @IsNumber({}, { each: true })
    labelIds: number[];

    @IsNumber()
    orgId: number;

    @IsNumber()
    closedDealsCount: number;

    @IsNumber()
    openDealsCount: number;

    @IsOptional()
    @IsDate()
    nextActivityDate?: Date;

    @IsNumber()
    ownerId: number;

    @IsEmail()
    primaryEmail: string;

    @IsOptional()
    @IsDate()
    nextActivityTime?: Date;

    @IsObject()
    emails: object;

    @IsObject()
    phones: object;
}

export class UpdatePersonDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;
}