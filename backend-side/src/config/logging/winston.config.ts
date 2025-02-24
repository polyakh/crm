import * as winston from 'winston';

export const winstonConfig = {
    level: process.env.LOG_LEVEL || 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.printf(({ level, message, timestamp, context }) => {
                    return `${timestamp} [${context || 'Nest'}] ${level}: ${message}`;
                })
            )
        }),
    ]
};