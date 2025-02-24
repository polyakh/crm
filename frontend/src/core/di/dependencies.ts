import { PinoLogger, Logger } from "../logging";
import {
  UserClient,
  GetUserByIdUseCase,
  GetAllUsersUseCase,
} from "../../modules/users";

import { LeadClient, CreateLeadUseCase } from "../../modules/leads";

export const logger = new PinoLogger();

export const userClient = new UserClient();
export const leadClient = new LeadClient();

export const getUserByIdUseCase = new GetUserByIdUseCase(logger, userClient);
export const getAllUsersUseCase = new GetAllUsersUseCase(logger, userClient);

export const createLeadUseCase = new CreateLeadUseCase(logger, leadClient);

export interface AppDependencies {
  logger: Logger;
  userClient: UserClient;
  leadClient: LeadClient;
  getUserByIdUseCase: GetUserByIdUseCase;
  getAllUsersUseCase: GetAllUsersUseCase;
  createLeadUseCase: CreateLeadUseCase;
}

export const dependencies: AppDependencies = {
  logger,
  userClient,
  leadClient,
  getUserByIdUseCase,
  getAllUsersUseCase,
  createLeadUseCase,
};
