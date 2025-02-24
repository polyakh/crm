import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppConfigService } from "./app-config.service";
import { winstonConfig } from "./logging";
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [
    WinstonModule.forRoot(winstonConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
