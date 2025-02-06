import { UserRole } from "~core/rbac-config.ts";
import {
  UserName,
  UserEmail,
  UserRoleValidator,
} from "~core/domain/value-objects";

export interface UserAttributes {
  id: string;
  name: UserName;
  email: UserEmail;
  role: UserRoleValidator;
  createdAt: Date;
  updatedAt: Date;
}

export class MissingUpdatedAtError extends Error {
  constructor() {
    super("UpdatedAt is required.");
    this.name = "MissingUpdatedAtError";
  }
}

export class User {
  readonly #id: string;
  #name: UserName;
  #email: UserEmail;
  #role: UserRoleValidator;
  readonly #createdAt: Date;
  #updatedAt: Date;

  constructor(attributes: UserAttributes) {
    this.#id = attributes.id;
    this.#createdAt = attributes.createdAt;
    this.#updatedAt = attributes.updatedAt;

    this.#name = attributes.name;
    this.#email = attributes.email;
    this.#role = attributes.role;
  }

  public get id(): string {
    return this.#id;
  }

  public get name(): string {
    return this.#name.value;
  }

  public get email(): string {
    return this.#email.value;
  }

  public get role(): UserRole {
    return this.#role.value;
  }

  public get createdAt(): Date {
    return this.#createdAt;
  }

  public get updatedAt(): Date {
    return this.#updatedAt;
  }

  public get isAdmin(): boolean {
    return this.#role.value === UserRole.SYSTEM_ADMIN;
  }
}
