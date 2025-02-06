import { ErrorCode } from "./error-code.ts";

class DomainError extends Error {
  public readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class InvalidNameError extends DomainError {
  constructor(message: string) {
    super(ErrorCode.INVALID_NAME, message);
  }
}

export class NameTooLongError extends DomainError {
  constructor(maxLength: number) {
    super(
      ErrorCode.NAME_TOO_LONG,
      `Name cannot exceed ${maxLength} characters`,
    );
  }
}

export class EmptyEmailError extends DomainError {
  constructor(message: string = "Email must be a non-empty string.") {
    super(ErrorCode.EMPTY_EMAIL, message);
  }
}

export class EmailTooLongError extends Error {
  constructor(maxLength: number) {
    super(`Email cannot exceed ${maxLength} characters.`);
    this.name = "EmailTooLongError";
  }
}

export class InvalidEmailFormatError extends DomainError {
  constructor(message: string = "Invalid email format.") {
    super(ErrorCode.INVALID_EMAIL_FORMAT, message);
  }
}
