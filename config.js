const args = process.argv.slice(2);
const argsParsed = {};

args.forEach((arg) => {
    const argsArr = arg.split('=');
    argsParsed[argsArr[0].slice(1)] = argsArr[1];
});

module.exports = {
    PORT: process.env.PORT,
    ENV: argsParsed.env
};
