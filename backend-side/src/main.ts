import { NestFactory } from "@nestjs/core";
import helmet from 'helmet';
import { AppConfigService } from "./config";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get(AppConfigService);
  app.setGlobalPrefix(appConfig.globalPrefix);

  app.enableCors(appConfig.corsOptions);
  app.use(helmet());

  const port = appConfig.port;
  await app.listen(port);
}
bootstrap();
