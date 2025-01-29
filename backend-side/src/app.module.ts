import { Module } from "@nestjs/common";
import { AppConfigModule } from "./config";
import { UsersModule } from "./modules";
import { PrismaModule } from "./database";

@Module({
  imports: [UsersModule, AppConfigModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
