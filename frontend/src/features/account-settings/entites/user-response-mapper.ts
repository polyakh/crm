import { User, UserAttributes as UserDto } from "../account-settings.model.ts";

export class UserMapper {
  static toDto(user: User): UserDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  static toDomain(userDto: UserDto): User {
    return new User(userDto.id, userDto.name, userDto.email);
  }

  static toDomainArray(userDtos: UserDto[]): User[] {
    return userDtos.map(UserMapper.toDomain);
  }
}
