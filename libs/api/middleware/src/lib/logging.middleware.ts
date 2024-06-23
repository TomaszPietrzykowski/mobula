import { LogLevel } from '@mobula/model';
import { Request, Response, NextFunction } from 'express';

export const httpLogger = (logLevel: LogLevel = LogLevel.Compact) => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log(
            `\x1b[38;5;83m***   Request method: ${req.method}\n
    \x1b[38;5;87m***   Endpoint: ${req.baseUrl}\n
    \x1b[38;5;87m***   Url: ${req.url}\n
    \x1b[38;5;75m***   Response status: ${res.statusCode}\n
    \x1b[38;5;33m***   User agent: ${req.headers['user-agent']} \n
    \x1b[38;5;98m***   Happy hacking!!!\x1b[0m`
        );
        if (logLevel == LogLevel.Verbose) {
            console.log(
                `\n\x1b[38;5;222m#################################################\n
                \x1b[48;5;83m\n\n
                \x1b[38;5;228m#################################################\n
                \x1b[38;5;192m#################################################\n
                \x1b[38;5;83m#################################################\n
                \x1b[38;5;84m#################################################\n
                \x1b[38;5;85m#################################################\n\x1b[48;5;0m
                \x1b[38;5;86m#################################################\n
                \x1b[38;5;87m#################################################\n
                \x1b[38;5;88m#################################################\n
                \x1b[38;5;89m#################################################\n
                \x1b[38;5;90m#################################################\n
                \x1b[38;5;91m#################################################\n
                \x1b[38;5;92m#################################################\n
                \x1b[38;5;93m#################################################\n
                \x1b[38;5;99m#################################################\x1b[38;5;0m`
            );
        }
        // TODO: color logging library:
        // https://blog.logrocket.com/using-console-colors-node-js/
        // https://en.m.wikipedia.org/wiki/ANSI_escape_code#Colors
        next();
    };
};
