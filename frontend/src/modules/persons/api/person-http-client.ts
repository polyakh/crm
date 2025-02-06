import { DefaultHttpClient } from "~core/http";
import { PERSON_ENDPOINTS } from "./person-endpoints";

export class PersonClient extends DefaultHttpClient {
  protected endpoints = PERSON_ENDPOINTS;

  public async getPerson<T>(
    id: number | string,
    options?: RequestInit,
  ): Promise<T> {
    return this.get<T>(this.endpoints.getPerson(id), options);
  }

  public async getAllPersons<T>(options?: RequestInit): Promise<T> {
    return this.get<T>(this.endpoints.getAllPersons, options);
  }

  public async createPerson<T>(
    data: unknown,
    options?: RequestInit,
  ): Promise<T> {
    return this.post<T>(this.endpoints.createPerson, data, options);
  }

  public async updatePerson<T>(
    id: number | string,
    data: unknown,
    options?: RequestInit,
  ): Promise<T> {
    return this.put<T>(this.endpoints.updatePerson(id), data, options);
  }
}
