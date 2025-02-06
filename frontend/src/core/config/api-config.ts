export type ApiConfig = {
  readonly BASE_URL: string;
  readonly TIMEOUT: number;
  readonly ENV: string;
  readonly API_VERSION: "v1" | "v2";
  readonly DEFAULT_HEADERS: {
    readonly Authorization: string;
  };
};

export const API_CONFIG: ApiConfig = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3007",
  TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 5000,
  API_VERSION: import.meta.env.VITE_API_VERSION || "v1",
  ENV: import.meta.env.VITE_ENV || "development",
  DEFAULT_HEADERS: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
