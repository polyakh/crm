import { InvalidNameError, NameTooLongError } from "../errors";

export class UserName {
  constructor(name: string) {
    this.#validate(name);
    this.#value = name;
  }

  get value(): string {
    return this.#value;
  }

  equals(other: UserName): boolean {
    if (!(other instanceof UserName)) return false;
    return this.#value === other.#value;
  }

  #validate(value: string): void {
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

  static readonly #MAX_LENGTH = 255;
  static readonly #MIN_LENGTH = 2;
  readonly #value: string;
}
