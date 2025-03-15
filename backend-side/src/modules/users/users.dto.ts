import { IsEmail, IsOptional, IsString, IsEnum, IsInt, IsDate, MinLength,  MaxLength, IsNotEmpty, IsUrl, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole, Language } from '@prisma/client';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    googleId: string;
  
    @IsOptional()
    @IsString()
    @Length(1, 55)
    name?: string;
  
    @IsOptional()
    @IsEmail()
    @Length(1, 55)
    email?: string;
  
    @IsOptional()
    @IsUrl()
    photoUrl?: string;
}

export class UserDto {
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    password?: string;

    @IsEnum(UserRole)
    role: UserRole;

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;

    @IsEnum(Language)
    language: Language = Language.EN;
}