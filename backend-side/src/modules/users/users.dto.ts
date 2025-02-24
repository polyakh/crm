import { IsEmail, IsOptional, IsString, IsEnum, IsInt, IsDate, MinLength,  MaxLength, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole, Language } from '@prisma/client';

export class CreateUserDto {
    @ApiProperty({ example: 'John Doe', description: 'User name', required: false })
    @IsString()
    @MinLength(2)
    @MaxLength(55)
    name?: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    password?: string;

    @IsEnum(UserRole)
    role?: UserRole;

    @IsEnum(Language)
    language?: Language = Language.EN;
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



export class CreateUserDto {
    @ApiProperty({ example: 'user@example.com', description: 'User email' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'John Doe', description: 'User name', required: false })
    @IsString()
    @IsNotEmpty()
    name?: string;

    @ApiProperty({ example: 'password123', description: 'User password' })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}