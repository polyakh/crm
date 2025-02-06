import { Logger } from "~core/logging";
import { User } from "~modules/users/models";
import { UserClient } from "../api";

export class GetAllUsersUseCase {
  constructor(
    private logger: Logger,
    private httpClient: UserClient,
  ) {}

  async execute(): Promise<User[]> {
    this.logger.info("Fetching all users");

    try {
      const users = await this.httpClient.getAllUsers();

      if (!users || users.length === 0) {
        this.logger.info("No users found");
        return [];
      }

      this.logger.info("Users fetched successfully", { count: users.length });
      return users;
    } catch (error) {
      this.logger.error("Error fetching all users", error);
      throw error;
    }
  }
}
