const loggerHelper = (typeOfLog, ...arg) => {
    console[typeOfLog](...arg)
};


module.exports = {
    log: (...arg) => loggerHelper('log', ...arg),
    debug: (...arg) => loggerHelper('debug', ...arg),
    error: (...arg) => loggerHelper('error', ...arg),
    warn: (...arg) => loggerHelper('warn', ...arg),
};
