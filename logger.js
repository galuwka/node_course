const loggerHelper = (typeOfLog, message, arg = '') => {
    console[typeOfLog](message, arg)
};


module.exports = {
    log: (message, arg) => loggerHelper('log', message, arg),
    debug: (message, arg) => loggerHelper('debug', message, arg),
    error: (message, arg) => loggerHelper('error', message, arg),
    warn: (message, arg) => loggerHelper('warn', message, arg),
};
