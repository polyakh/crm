export type NotificationType = "success" | "error" | "warning" | "info";

export class NotificationService {
  notify(options: {
    type: NotificationType;
    message: string;
    duration?: number;
  }): void {
    console.log(`[${options.type.toUpperCase()}] ${options.message}`);
  }
}

export class LoggingService {
  error(message: string, error?: unknown): void {
    console.error(message, error);
  }
}

export class ErrorHandler {
  constructor(
    private notificationService: NotificationService,
    private loggingService: LoggingService,
  ) {}

  handle(error: unknown): void {
    if (error instanceof Error) {
      const message = this.getUserFriendlyMessage(error);

      this.notificationService.notify({
        type: "error",
        message,
      });

      this.loggingService.error("Error details:", error);
    }
  }

  private getUserFriendlyMessage(error: Error): string {
    const errorMap: Record<string, string> = {
      NetworkError: "Connection failed. Please check your internet.",
      ValidationError: "Invalid data. Please review your input.",
      AuthenticationError: "Authentication failed. Please log in again.",
    };

    return errorMap[error.name] || "An unexpected error occurred";
  }
}
