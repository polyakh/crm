import { NestFactory } from "@nestjs/core";
import helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppConfigService } from "./config";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))

  const appConfig = app.get(AppConfigService);
  app.setGlobalPrefix(appConfig.globalPrefix);
  // app.use(express.json());
  app.enableCors(appConfig.corsOptions);
  app.use(helmet());

  const port = appConfig.port;
  await app.listen(port);
}
bootstrap();
