import { PinoLogger, Logger } from "../logging";
import {
  UserClient,
  GetUserByIdUseCase,
  GetAllUsersUseCase,
} from "../../modules/users";

export const logger = new PinoLogger();
export const userClient = new UserClient();
export const getUserByIdUseCase = new GetUserByIdUseCase(logger, userClient);
export const getAllUsersUseCase = new GetAllUsersUseCase(logger, userClient);

export interface AppDependencies {
  logger: Logger;
  userClient: UserClient;
  getUserByIdUseCase: GetUserByIdUseCase;
  getAllUsersUseCase: GetAllUsersUseCase;
}

export const dependencies: AppDependencies = {
  logger,
  userClient,
  getUserByIdUseCase,
  getAllUsersUseCase,
};
