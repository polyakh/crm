import { Logger } from "~core/logging";
import { User } from "~modules/users/models";
import { PersonClient } from "../api";

interface GetUserByIdParams {
  userId: string;
}

export class GetUserByIdUseCase {
  constructor(
    private logger: Logger,
    private httpClient: PersonClient,
  ) {}

  async execute({ userId }: GetUserByIdParams): Promise<User | undefined> {
    if (!userId) {
      this.logger.warn("User ID is required", { userId });
      throw new Error("User ID is required");
    }

    this.logger.info("Fetching user by ID", { userId });

    try {
      const user = await this.httpClient.getPerson(userId);

      if (!user) {
        this.logger.info("User not found", { userId });
        return undefined; // Use null instead of undefined for consistency
      }

      this.logger.info("User fetched successfully", { userId });
      return user;
    } catch (error) {
      // this.logger.error('Error fetching user', { userId, error });
      // this.handleError(error, 'GetUserByIdUseCase');
    }
  }
}
