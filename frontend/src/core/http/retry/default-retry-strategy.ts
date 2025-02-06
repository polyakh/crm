import pRetry, {
  Options as PRetryOptions,
  AbortError as PRetryAbortError,
} from "p-retry";
import { NonRetriableHttpError } from "../errors";
import { RetryOptions, RetryStrategy } from "./retry-strategy.ts";

export class DefaultRetryStrategy implements RetryStrategy {
  retry<T>(fn: () => Promise<T>, options: RetryOptions): Promise<T> {
    const pRetryOptions: PRetryOptions = {
      retries: options.retries,
    };

    return pRetry(fn, pRetryOptions).catch((error) => {
      if (
        error instanceof PRetryAbortError &&
        error.originalError instanceof NonRetriableHttpError
      ) {
        throw error.originalError;
      }
      throw error;
    });
  }
}
