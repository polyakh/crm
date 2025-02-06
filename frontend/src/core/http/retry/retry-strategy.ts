export interface RetryOptions {
  retries: number;
}

export interface RetryStrategy {
  retry<T>(fn: () => Promise<T>, options: RetryOptions): Promise<T>;
}
