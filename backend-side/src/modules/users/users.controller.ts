import { Controller, Get, Post, Body } from "@nestjs/common";
import { User } from "@prisma/client";
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


import { UsersService } from "./users.service";

@Controller("users")
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
