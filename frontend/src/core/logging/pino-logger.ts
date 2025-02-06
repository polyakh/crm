// PinoLogger.ts
import pino, { Logger as PinoLoggerInstance } from "pino";
import { Logger } from "./logger";

export const LogLevels = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
} as const;

export class PinoLogger implements Logger {
  private logger: PinoLoggerInstance;

  constructor() {
    // Create the pino logger instance
    this.logger = pino({
      level: LogLevels.INFO,
      // The `browser` configuration is used by pino in browser environments.
      browser: {
        // Log as objects; for development, you may enable pretty printing.
        asObject: true,
        // Uncomment the following line if you want pretty printing in development:
        // prettyPrint: { colorize: true, translateTime: 'HH:MM:ss.l' },
      },
      // For JSON output, pino uses its built-in format.
      // If you need to log to files, you may have to set up a custom transport in Node.
    });
  }

  info(message: string, meta?: object): void {
    // pino logs the meta object first, then the message.
    this.logger.info(meta, message);
  }

  error(message: string, error?: Error, meta?: object): void {
    // Include the error stack if available, merged with any meta.
    this.logger.error({ error: error?.stack, ...meta }, message);
  }

  warn(message: string, meta?: object): void {
    this.logger.warn(meta, message);
  }

  debug(message: string, meta?: object): void {
    this.logger.debug(meta, message);
  }
}
