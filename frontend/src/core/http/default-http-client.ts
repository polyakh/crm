import { API_CONFIG, ApiConfig } from "~core/config";
import { RetryOptions, RetryStrategy, DefaultRetryStrategy } from "./retry";
import { HttpClient } from "./http-client";
import { HttpError, NonRetriableHttpError } from "./errors";

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
// Missing request cancellation support,
// No caching mechanism for GET requests,
// No request timeout handling - could lead to hanging requests
// Error response parsing assumes text format only
export class DefaultHttpClient implements HttpClient {
  constructor(
    private retryOptions: RetryOptions = {
      retries: DefaultHttpClient.DEFAULT_RETRIES,
    },
    private retryStrategy: RetryStrategy = new DefaultRetryStrategy(),
    private apiConfig: ApiConfig = API_CONFIG,
  ) {}

  public async get<T>(path: string, options?: RequestInit): Promise<T> {
    const url = this.buildUrl(path);
    const fetchOptions: RequestInit = {
      method: HttpMethod.GET,
      headers: {
        ...this.apiConfig.DEFAULT_HEADERS,
        ...options?.headers,
      },
      ...options,
    };
    return this.executeRequest<T>(url, fetchOptions);
  }

  public async post<T>(
    path: string,
    data: unknown,
    options?: RequestInit,
  ): Promise<T> {
    const url = this.buildUrl(path);
    const fetchOptions: RequestInit = {
      method: HttpMethod.POST,
      headers: {
        ...this.apiConfig.DEFAULT_HEADERS,
        ...options?.headers,
      },
      ...options,
      ...(data ? { body: JSON.stringify(data) } : {}),
    };
    return this.executeRequest<T>(url, fetchOptions);
  }

  public async put<T>(
    path: string,
    data: unknown,
    options?: RequestInit,
  ): Promise<T> {
    const url = this.buildUrl(path);
    const fetchOptions: RequestInit = {
      method: HttpMethod.PUT,
      headers: {
        ...this.apiConfig.DEFAULT_HEADERS,
        ...options?.headers,
      },
      ...options,
      ...(data ? { body: JSON.stringify(data) } : {}),
    };
    return this.executeRequest<T>(url, fetchOptions);
  }

  private async executeRequest<T>(
    url: string,
    fetchOptions: RequestInit,
  ): Promise<T> {
    return this.retryStrategy.retry(
      () => this.performFetch<T>(url, fetchOptions),
      this.retryOptions,
    );
  }

  private async performFetch<T>(
    url: string,
    fetchOptions: RequestInit,
  ): Promise<T> {
    const response = await fetch(url, fetchOptions);
    if (response.ok) {
      return this.parseResponse<T>(response);
    }
    return this.handleErrorResponse<T>(response);
  }

  private async parseResponse<T>(response: Response): Promise<T> {
    return response.json();
  }

  private async handleErrorResponse<T>(response: Response): Promise<T> {
    const errorBody = await response.text();
    const error = new HttpError(response.status, errorBody);
    if (!this.isRetriableStatus(error.status)) {
      throw new NonRetriableHttpError(error.status, error.message);
    }
    throw error;
  }

  private isRetriableStatus(status: number): boolean {
    return DefaultHttpClient.RETRIABLE_STATUS_CODES.includes(status);
  }

  private buildUrl(path: string): string {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${API_CONFIG.BASE_URL}/api/${API_CONFIG.API_VERSION}${cleanPath}`;
  }

  static readonly DEFAULT_RETRIES = 3;
  static readonly RETRIABLE_STATUS_CODES = [408, 429, 500, 502, 503, 504];
}
