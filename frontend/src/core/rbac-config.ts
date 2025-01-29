export enum UserRole {
  SYSTEM_ADMIN = 0,
  SALES_AGENT = 1,
}

export const rolePermissions = {
  [UserRole.SYSTEM_ADMIN]: {
    canViewCRM: true,
    canManageCRMUsers: true,
    canAccessCRMReports: true,
  },
  [UserRole.SALES_AGENT]: {
    canViewCRM: true,
    canManageCRMUsers: false,
    canAccessCRMReports: true,
  },
};

export const allowedRoles = Object.values(UserRole).filter(
  (roleValue) => typeof roleValue === "number",
) as UserRole[];
