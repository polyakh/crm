import { UserRole } from "~core/rbac-config.ts";
import {
  UserName,
  UserEmail,
  UserRoleValidator,
} from "./entites/value-objects";

export interface UserAttributes {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export class MissingIdError extends Error {
  constructor() {
    super("Id is required.");
    this.name = "MissingIdError";
  }
}

export class MissingCreatedAtError extends Error {
  constructor() {
    super("CreatedAt is required.");
    this.name = "MissingCreatedAtError";
  }
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
  #role: UserRole;
  readonly #createdAt: Date;
  #updatedAt: Date;

  constructor(attributes: UserAttributes) {
    if (!attributes.id) {
      throw new MissingIdError();
    }
    if (!attributes.createdAt) {
      throw new MissingCreatedAtError();
    }
    if (!attributes.updatedAt) {
      throw new MissingUpdatedAtError();
    }

    this.#id = attributes.id;
    this.#createdAt = attributes.createdAt;
    this.#updatedAt = attributes.updatedAt;

    this.#name = new UserName(attributes.name);
    this.#email = new UserEmail(attributes.email);
    this.#role = new UserRoleValidator(attributes.role).value;
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
    return this.#role;
  }

  public get createdAt(): Date {
    return this.#createdAt;
  }

  public get updatedAt(): Date {
    return this.#updatedAt;
  }

  public get isAdmin(): boolean {
    return this.#role === UserRole.SYSTEM_ADMIN;
  }
}
