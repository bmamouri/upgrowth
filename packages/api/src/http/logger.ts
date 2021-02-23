import * as expressWinston from 'express-winston';
import {format, transports} from 'winston';

const {combine, timestamp, json} = format;

/**
 * Check if an Url is in the blacklist
 *
 * @param url
 */
export const requestLogger = expressWinston.logger({
    level: 'info',
    transports: [
        new transports.Console(),
    ],
    format: combine(
        timestamp(),
        json(),
    ),
});

export const errorLogger = expressWinston.errorLogger({
    transports: [
        new transports.Console(),
    ],
    format: combine(
        timestamp(),
        json(),
    ),
    msg: '{{err.message}}',
});
