/**
 * Custom Winston logger configuration.
 * 
 * This module creates and exports a Winston logger instance
 * configured with:
 * - JSON formatting
 * - Timestamp metadata
 * - Console output
 * - File logging for errors and combined logs
 * 
 * @module logger
 */

const { createLogger, transports, format } = require('winston');

/**
 * Winston logger instance.
 * 
 * @type {import('winston').Logger}
 * @property {Function} info - Logs an informational message.
 * @property {Function} warn - Logs a warning message.
 * @property {Function} error - Logs an error message.
 * @property {Function} log - Logs a message with a specified level.
 */
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        /**
         * Outputs logs to the console.
         * @type {import('winston').transports.Console}
         */
        new transports.Console(),

        /**
         * Writes only error-level logs to logs/error.log.
         * @type {import('winston').transports.File}
         */
        new transports.File({ filename: 'logs/error.log', level: 'error' }),

        /**
         * Writes all logs (info and above) to logs/combined.log.
         * @type {import('winston').transports.File}
         */
        new transports.File({ filename: 'logs/combined.log' })
    ]
});

module.exports = logger;
