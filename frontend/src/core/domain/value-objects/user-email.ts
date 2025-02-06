import {
  EmptyEmailError,
  EmailTooLongError,
  InvalidEmailFormatError,
} from "../errors";

export class UserEmail {
  constructor(email: string) {
    this.#validate(email);
    this.#value = email;
  }

  get value(): string {
    return this.#value;
  }

  #validate(email: string): void {
    if (typeof email !== "string" || email.trim().length === 0) {
      throw new EmptyEmailError();
    }
    if (email.length > UserEmail.#MAX_LENGTH) {
      throw new EmailTooLongError(UserEmail.#MAX_LENGTH);
    }
    if (!UserEmail.#EMAIL_REGEX.test(email)) {
      throw new InvalidEmailFormatError();
    }
  }

  static readonly #MAX_LENGTH = 255;
  static readonly #EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  readonly #value: string;
}
