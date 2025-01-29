export interface Result<T> {
  success: boolean;
  data?: T;
  error?: ErrorDetails;
}

export interface ErrorDetails {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
