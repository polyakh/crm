export const LogLevels = {
  INFO: "INFO",
  WARN: "WARN",
  ERROR: "ERROR",
} as const;

export interface LoggingService {
  info(message: string, context?: Record<string, unknown>): void;
  warn(message: string, context?: Record<string, unknown>): void;
  error(
    message: string,
    error?: unknown,
    context?: Record<string, unknown>,
  ): void;
}

export class ConsoleLoggingService implements LoggingService {
  info(message: string, context?: Record<string, unknown>): void {
    console.log(
      JSON.stringify({
        level: LogLevels.INFO,
        message,
        context,
        timestamp: new Date().toISOString(),
      }),
    );
  }

  warn(message: string, context?: Record<string, unknown>): void {
    console.warn(
      JSON.stringify({
        level: LogLevels.WARN,
        message,
        context,
        timestamp: new Date().toISOString(),
      }),
    );
  }

  error(
    message: string,
    error?: unknown,
    context?: Record<string, unknown>,
  ): void {
    console.error(
      JSON.stringify({
        level: LogLevels.ERROR,
        message,
        error:
          error instanceof Error
            ? {
                name: error.name,
                message: error.message,
                stack: error.stack,
              }
            : error,
        context,
        timestamp: new Date().toISOString(),
      }),
    );
  }
}
