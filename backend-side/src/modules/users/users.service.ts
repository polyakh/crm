import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { User } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }
}
