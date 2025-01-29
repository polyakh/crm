export class EmptyEmailError extends Error {
  constructor() {
    super("Email must be a non-empty string.");
    this.name = "EmptyEmailError";
  }
}

export class EmailTooLongError extends Error {
  constructor(maxLength: number) {
    super(`Email cannot exceed ${maxLength} characters.`);
    this.name = "EmailTooLongError";
  }
}

export class InvalidEmailFormatError extends Error {
  constructor() {
    super("Invalid email format.");
    this.name = "InvalidEmailFormatError";
  }
}

export class UserEmail {
  constructor(private readonly email: string) {
    this.#validate(email);
  }

  get value(): string {
    return this.email.trim().toLowerCase();
  }

  #validate(email: string): void {
    if (typeof email !== "string" || email.trim().length === 0) {
      throw new EmptyEmailError();
    }
    if (email.length > UserEmail.MAX_LENGTH) {
      throw new EmailTooLongError(UserEmail.MAX_LENGTH);
    }
    if (!UserEmail.EMAIL_REGEX.test(email)) {
      throw new InvalidEmailFormatError();
    }
  }

  private static readonly MAX_LENGTH = 255;

  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
}
