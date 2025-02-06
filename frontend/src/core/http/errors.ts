export class HttpError extends Error {
  constructor(
    public status: number,
    public message: string,
  ) {
    super(`HTTP Error ${status}: ${message}`);
    this.name = "HttpError";
  }
}

export class NonRetriableHttpError extends HttpError {
  constructor(status: number, message: string) {
    super(status, message);
    this.name = "NonRetriableHttpError";
  }
}
