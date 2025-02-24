import { registerAs } from '@nestjs/config';

export const googleOauthConfig = registerAs('googleOAuth', () => ({
    clientID: process.env.GOOGLE_API_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
}));