export enum ErrorCode {
  INVALID_NAME = "INVALID_NAME",
  NAME_TOO_LONG = "NAME_TOO_LONG",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  EMPTY_EMAIL = "EMPTY_EMAIL",
  EMAIL_TOO_LONG = "EMAIL_TOO_LONG",
  INVALID_EMAIL_FORMAT = "INVALID_EMAIL_FORMAT",

  // Authentication domain errors
  EMAIL_INVALID = "EMAIL_INVALID",
  PERMISSION_DENIED = "PERMISSION_DENIED",
}
