import { Logtail } from "@logtail/node"
import { LogtailTransport } from "@logtail/winston"
import {createLogger, format, transports} from "winston"



const logtail = new Logtail(process.env.LOGGER_TOKEN)

export const logger = createLogger({
    level: "silly",
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message, stack }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message} ${stack ? '\n' + stack : ''}`;
        }),
        format.colorize({all: true})
    ),
    transports: [
        new transports.Console(),
        new LogtailTransport(logtail)

    ]
})