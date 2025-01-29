class HttpClient {
  async get<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    return this.handleResponse<T>(response);
  }

  async post<T>(
    url: string,
    data: unknown,
    options: RequestInit = {},
  ): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });

    return this.handleResponse<T>(response);
  }

  async put<T>(
    url: string,
    data: unknown,
    options: RequestInit = {},
  ): Promise<T> {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });

    return this.handleResponse<T>(response);
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorBody = await response.text();
      throw new HttpError(response.status, errorBody);
    }

    return response.json();
  }
}

class HttpError extends Error {
  constructor(
    public status: number,
    public message: string,
  ) {
    super(`HTTP Error ${status}: ${message}`);
    this.name = "HttpError";
  }
}

export { HttpClient };
