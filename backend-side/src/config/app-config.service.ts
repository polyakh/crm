import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>("PORT", 3000);
  }

  get corsOptions() {
    return {
      origin: this.configService.get<string>("CORS_ORIGIN", "*"),
      credentials: true,
    };
  }

  get globalPrefix(): string {
    return this.configService.get<string>("GLOBAL_PREFIX", "api/v1");
  }

  get databaseUrl(): string {
    return this.configService.get<string>("DATABASE_URL");
  }
}

// TODO: Add environment variable validation using Joi or similar libraries
// Example:
// export const envValidationSchema = Joi.object({
//   PORT: Joi.number().default(3000),
//   DATABASE_URL: Joi.string().uri().required(),
//   CORS_ORIGIN: Joi.string().default('*'),
//   GLOBAL_PREFIX: Joi.string().default('api/v1'),
// });
