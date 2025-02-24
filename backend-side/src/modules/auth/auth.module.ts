import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig, googleOauthConfig } from './config';
import { ConfigModule } from '@nestjs/config';


@Module({
    imports: [
        // TypeOrmModule.forFeature([User]),
        JwtModule.registerAsync(jwtConfig.asProvider()),
        ConfigModule.forFeature(jwtConfig),
        ConfigModule.forFeature(googleOauthConfig),
        // ConfigModule.forFeature(refreshJwtConfig),

    ],
    // controllers: [AuthController],
    providers: [

    ],
})
export class AuthModule {}