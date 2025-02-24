import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfig = registerAs(
    'jwt',
    (): JwtModuleOptions => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
            expiresIn: process.env.JWT_EXPIRE_IN,
        },
    }),
);