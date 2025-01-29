export abstract class ValueObject<T> {
  readonly #value: T;

  constructor(value: T) {
    this.validate(value);
    this.#value = this.process(value);
  }

  protected abstract validate(value: T): void;

  protected process(value: T): T {
    return value;
  }

  public get value(): T {
    return this.#value;
  }

  public equals(other: ValueObject<T>): boolean {
    if (this.constructor !== other.constructor) {
      return false;
    }
    return this.value === other.value;
  }

  public toString(): string {
    return String(this.value);
  }
}
