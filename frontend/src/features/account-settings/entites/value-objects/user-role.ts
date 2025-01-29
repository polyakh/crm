import { allowedRoles, UserRole } from "~core/rbac-config";

// loading allowed roles from a configuration file or database.
export class RoleValidationError extends Error {
  constructor(allowedRoles: number[], customMessage?: string) {
    const defaultMessage = `Role must be one of the following: ${allowedRoles.join(", ")}.`;
    super(customMessage || defaultMessage);
    this.name = "RoleValidationError";
  }
}

export class UserRoleValidator {
  constructor(private readonly role: UserRole) {
    this.#validate();
  }

  get value(): UserRole {
    return this.role;
  }

  #validate(): void {
    if (!allowedRoles.includes(this.role)) {
      throw new RoleValidationError(allowedRoles);
    }
  }
}
