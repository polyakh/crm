import pRetry, { Options as PRetryOptions } from "p-retry";
import { RetryStrategy, RetryOptions } from "./retry-strategy.ts";

export class PRetryStrategy implements RetryStrategy {
  retry<T>(fn: () => Promise<T>, options: RetryOptions): Promise<T> {
    const pRetryOptions: PRetryOptions = {
      retries: options.retries,
    };
    return pRetry(fn, pRetryOptions);
  }
}
