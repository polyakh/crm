import { ValueObject } from "~core/services/value-objec.ts";
import { ErrorCode, DomainError } from "~core/services/domain-error";

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

export class UserName extends ValueObject<string> {
  static readonly #MAX_LENGTH = 255;
  static readonly #MIN_LENGTH = 2;

  protected validate(value: string): void {
    if (typeof value !== "string") {
      throw new InvalidNameError("Name must be a string");
    }

    const trimmedValue = value.trim();

    if (trimmedValue.length < UserName.#MIN_LENGTH) {
      throw new InvalidNameError(
        `Name must be at least ${UserName.#MIN_LENGTH} characters long`,
      );
    }

    if (trimmedValue.length > UserName.#MAX_LENGTH) {
      throw new NameTooLongError(UserName.#MAX_LENGTH);
    }

    if (!/^[\p{L}\s'-]+$/u.test(trimmedValue)) {
      throw new InvalidNameError(
        "Name can only contain letters, spaces, hyphens and apostrophes",
      );
    }
  }

  protected process(value: string): string {
    return value.trim();
  }
}
