const args = require('minimist')(process.argv.slice(2));

module.exports = {
    PORT: process.env.PORT,
    ENV: args.e
};
