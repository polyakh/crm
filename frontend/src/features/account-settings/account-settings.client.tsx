import { HttpClient } from '~core/services'

interface ICustomerClient {
    fetchCustomer(): Promise<any>;
    updateCustomer(data: Partial<any>): Promise<any>;
}

export class AccountSettingsClient implements ICustomerClient {

    constructor(private readonly httpClient: HttpClient) {}

    async fetch(): Promise<any> {
        return this.httpClient.get<any>("/customers/1");
    }

    async update(data: Partial<any>): Promise<any> {
        return this.httpClient.put<any>("/customers/1", data);
    }
}