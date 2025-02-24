import { DefaultHttpClient } from "~core/http";
import { LEAD_ENDPOINTS } from "./lead-endpoints.ts";

export class LeadClient extends DefaultHttpClient {
  protected endpoints = LEAD_ENDPOINTS;

  public async getLead<T>(
    id: number | string,
    options?: RequestInit,
  ): Promise<T> {
    return this.get<T>(this.endpoints.getLead(id), options);
  }

  public async getAllLeads<T>(options?: RequestInit): Promise<any> {
    return this.get<T>(this.endpoints.getAllLeads, options);
  }

  public async createLead<T>(data: unknown, options?: RequestInit): Promise<T> {
    return this.post<T>(this.endpoints.createLead, data, options);
  }

  public async updateLead<T>(
    id: number | string,
    data: unknown,
    options?: RequestInit,
  ): Promise<T> {
    return this.put<T>(this.endpoints.updateLead(id), data, options);
  }
}
