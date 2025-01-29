import { Logger } from "./winston-logger.ts";

export abstract class UseCase<Params, ReturnType> {
  constructor(protected logger: Logger) {}

  abstract execute(params: Params): Promise<ReturnType>;
}
