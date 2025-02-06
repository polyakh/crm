import { DefaultHttpClient } from "~core/http";
import { USER_ENDPOINTS } from "./user-endpoints";

export class UserClient extends DefaultHttpClient {
  protected endpoints = USER_ENDPOINTS;

  public async getUser<T>(
    id: number | string,
    options?: RequestInit,
  ): Promise<T> {
    return this.get<T>(this.endpoints.getUser(id), options);
  }

  public async getAllUsers<T>(options?: RequestInit): Promise<any> {
    return this.get<T>(this.endpoints.getAllUsers, options);
  }

  public async createUser<T>(data: unknown, options?: RequestInit): Promise<T> {
    return this.post<T>(this.endpoints.createUser, data, options);
  }

  public async updateUser<T>(
    id: number | string,
    data: unknown,
    options?: RequestInit,
  ): Promise<T> {
    return this.put<T>(this.endpoints.updateUser(id), data, options);
  }
}
