export interface HttpClient {
  get<T>(path: string, options?: RequestInit): Promise<T>;
  post<T>(path: string, data: unknown, options?: RequestInit): Promise<T>;
  put<T>(path: string, data: unknown, options?: RequestInit): Promise<T>;
  delete?<T>(path: string, options?: RequestInit): Promise<T>;
}
