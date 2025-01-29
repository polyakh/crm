import { UseCase } from "~core/services/use-case-abstract.ts";
import { Logger } from "~core/services/winston-logger.ts";
import { User } from "./account-settings.model.ts";

export interface UserRepository {
  findById(id: string): Promise<User | undefined>;
}

interface GetUserByIdParams {
  userId: string;
}

export class GetUserByIdUseCase extends UseCase<
  GetUserByIdParams,
  User | undefined
> {
  constructor(
    private readonly repository: UserRepository,
    logger: Logger,
  ) {
    super(logger);
  }

  async execute({ userId }: GetUserByIdParams): Promise<User | undefined> {
    try {
      this.logger.info("Fetching user by ID", { userId });
      const user = await this.repository.findById(userId);

      if (!user) {
        this.logger.info("User not found", { userId });
        return undefined;
      }

      return user;
    } catch (error) {
      this.logger.error("Error fetching user", error as Error, { userId });
      throw error;
    }
  }
}
