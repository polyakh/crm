import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "~database";

@Injectable()
export class UsersRepository {
  constructor(private readonly databaseService: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.databaseService.user.findMany();
  }
}
