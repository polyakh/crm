import { allowedRoles, UserRole } from "~core/rbac-config.ts";

// loading allowed roles from a configuration file or database.
export class RoleValidationError extends Error {
  constructor(allowedRoles: number[], customMessage?: string) {
    const defaultMessage = `Role must be one of the following: ${allowedRoles.join(", ")}.`;
    super(customMessage || defaultMessage);
    this.name = "RoleValidationError";
  }
}

export class UserRoleValidator {
  constructor(role: UserRole) {
    this.#validate(role);
    this.#value = role;
  }

  get value(): UserRole {
    return this.#value;
  }

  #validate(role: UserRole): void {
    if (!allowedRoles.includes(role)) {
      throw new RoleValidationError(allowedRoles);
    }
  }

  readonly #value: UserRole;
}
