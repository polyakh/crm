import { API_CONFIG } from "./api-config.ts";

type ApiEndpoints = {
  readonly AUTH: {
    readonly LOGIN: string;
    readonly REGISTER: string;
    readonly REFRESH_TOKEN: string;
  };
  readonly USERS: {
    readonly BASE: string;
    readonly BY_ID: (id: string) => string;
  };
  readonly PERSONS: {
    readonly BASE: string;
    readonly BY_ID: (id: string) => string;
  };
};

export const API_ENDPOINTS: ApiEndpoints = {
  AUTH: {
    LOGIN: `${API_CONFIG.BASE_URL}/auth/login`,
    REGISTER: `${API_CONFIG.BASE_URL}/auth/register`,
    REFRESH_TOKEN: `${API_CONFIG.BASE_URL}/auth/refresh`,
  },
  USERS: {
    BASE: `${API_CONFIG.BASE_URL}/users`,
    BY_ID: (id: string) => `${API_CONFIG.BASE_URL}/users/${id}`,
  },
  PERSONS: {
    BASE: `${API_CONFIG.BASE_URL}/persons`,
    BY_ID: (id: string) => `${API_CONFIG.BASE_URL}/persons/${id}`,
  },
};
