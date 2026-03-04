/**
 * Entry point for demonstrating the logger utility.
 * 
 * This script imports the custom Winston-based logger and
 * logs messages at various severity levels using both the
 * generic `log()` method and the convenience methods
 * (`info`, `warn`, `error`).
 */

const logger = require('./logger');

/**
 * Log messages using the generic log(level, message) method.
 */
logger.log('info', 'This is an informational message.');
logger.log('warn', 'This is a warning message.');
logger.log('error', 'This is an error message.');

/**
 * Log messages using convenience methods.
 */
logger.info('This is another informational message.');
logger.warn('This is another warning message.');
logger.error('This is another error message.');
