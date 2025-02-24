import { Module } from "@nestjs/common";
import { AppConfigModule } from "./config";
import { UsersModule, PersonsModule, LeadsModule } from "./modules";
import { PrismaModule } from "./database";

@Module({
  imports: [UsersModule, PersonsModule, LeadsModule, AppConfigModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
