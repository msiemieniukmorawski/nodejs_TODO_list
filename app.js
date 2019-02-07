const yargs = require("yargs");

const Commands = require("./commands");

Commands.forEach(command => yargs.command(command));

// init parsing args...
yargs.argv;
console.log(yargs.argv);
