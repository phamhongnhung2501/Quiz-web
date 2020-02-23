/**
 * Module:    Quản lý lịch sử log
 * Author:    Tinasoft.vn
 * @version:  v2.0.1
 * Create:    9/2019    by @Haian
 * Modified:  09/03/2019 by @Haian
 *
 */

const winston = require('winston');
const moment = require('moment');
const path = require('path');
const lodash = require('lodash');
const util = require('util');
const debug = require('debug')('debug:logHistory');

// console.log = function() {}; // Off console.log - tat cl

/**
 * Ghi log ra file theo từng ngày:
 *    log thường info -> storage/logs: Bao gồm cả logs và errors
 *              error -> storage/error: Chỉ có các errors
 * @example log.info(["app.js", "Info_messages"])
 * @example log.error(["app.js", "Err_messages"])

 */
let date = new Date();
let fileName = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.log`;
let storage_root = path.resolve('./', 'storage');
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
};
const charOfLevel = [' |E| ', ' |W| ', ' |I| ', ' |V| ', ' |D| ', ' |S| '];
const MAX_PAD = 25;

function resolveMessage(message) {
    // if( !message )
    //     return message;

    // var log;
    // console.log = function() {
    //     log = [].slice.call(arguments);
    // };
    // lodash.isObject(message)
    //     console.log( util.inspect(message, false, null, true) )
    // debug(log)



    return util.inspect(message, false, null, false);
}
function prepareString(object, isConsole) {
    let fileName = object.message[0].substr(0,MAX_PAD);
    fileName = fileName.padEnd(MAX_PAD)  + ' | ';

    let level = levels[object.level];
    let message = object.message[1]; //console.log(message)
    if( !lodash.isString(message) )
        message = resolveMessage( object.message[1] ); //console.log(message)

    let time =`${moment().format('HH:mm:ss')}`;
    let charLevel = charOfLevel[level];

    if(isConsole){
        fileName = fileName.blue;
        if( message )
        try {
            switch (level) {
                case levels.error:
                    message = message.red;
                    break;
                case levels.warn:
                    message = message.yellow;
                    break;
                case levels.info:
                    message = message.green;
                    break;
            }
        } catch(e){}
    }

    return time + charLevel + fileName + message;
}

function _getCallerFile(lineNumber="") {
    let originalFunc = Error.prepareStackTrace;
    let callerfile;
    try {
        let err = new Error();
        let currentfile;

        Error.prepareStackTrace = function (err, stack) { return stack; };
        currentfile = err.stack.shift().getFileName();
        while (err.stack.length) {
            callerfile = err.stack.shift().getFileName();

            if(currentfile !== callerfile) break;
        }
    } catch (e) {}
    Error.prepareStackTrace = originalFunc;

    return path.basename(path.dirname(callerfile)) + '/' + path.basename(callerfile) + lineNumber;
}

const log = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.File({
            filename: path.join(storage_root, 'error', fileName),
            level: 'error',
            format: winston.format.printf(error => {
                return prepareString(error);
            } )
        }),
        new winston.transports.File({
            filename: path.join(storage_root, 'warn', fileName),
            level: 'warn',
            format: winston.format.printf(warn => {
                return prepareString(warn);
            } )
        }),
        new winston.transports.File({
            filename: path.join(storage_root, 'logs', fileName),
            level: 'info',
            format: winston.format.printf(info => {
                return prepareString(info);
            } )
        }),

        // new winston.transports.Console({
        //     colorize: true,
        //     level: 'error',
        //     namea: "123",
        //     format: winston.format.printf(error => {
        //         return prepareString(error);
        //     } )
        // }),
        // new winston.transports.Console({
        //     colorize: true,
        //     level: 'warn',
        //     format: winston.format.printf(warn => {
        //         return prepareString(warn);
        //     } )
        // }),
        process.env.NODE_ENV === "DEV" || process.env.NODE_ENV === "STAGING" ?
            new winston.transports.Console({
                colorize: true,
                level: 'info',
                format: winston.format.printf(info => {
                    return prepareString(info, true);
                } )
            }) :
            new winston.transports.File({
                filename: path.join(storage_root, 'silly', fileName),
                level: 'silly',
                format: winston.format.printf(silly => {
                    return prepareString(silly);
                } )
            }),
    ]
});

function getCallerFunction(error) {
    let frame = error.stack.split("\n")[2];
    let countColon = (frame.match(/:/g) || []).length;
    let lineNumber = countColon === 2
                    ? frame.split(":")[1]
                    : frame.split(":")[2];
    let functionName = frame.split(" ")[5];
    return [functionName, ":" + lineNumber];
}

function error(message){
    let [functionName, lineNumber] = getCallerFunction(new Error());
    debug( (functionName + lineNumber ).red );
    let callerfile = _getCallerFile(lineNumber);
    log.error([callerfile, message]);
}

function warn(message){
    let [functionName, lineNumber] = getCallerFunction(new Error());
    debug( (functionName + lineNumber).red );
    let callerfile = _getCallerFile(lineNumber);
    log.warn([callerfile, message]);
}

function info(message){
    let [functionName, lineNumber] = getCallerFunction(new Error());
    let callerfile = _getCallerFile(lineNumber);
    log.info([callerfile, message]);
}

global.log = {
    error,
    warn,
    info,
};

module.exports = {
    error,
    warn,
    info,
};
