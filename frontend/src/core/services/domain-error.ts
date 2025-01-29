export const ErrorCode = {
  INVALID_NAME: "INVALID_NAME",
  NAME_TOO_LONG: "NAME_TOO_LONG",
  NAME_TOO_SHORT: "NAME_TOO_SHORT",
} as const;

export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

export abstract class DomainError extends Error {
  constructor(code: ErrorCode, message: string) {
    super(message);
    this.name = code;
    Error.captureStackTrace(this, this.constructor);
  }
}
