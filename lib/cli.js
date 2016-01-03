#!/usr/bin/env node
var program = require('commander');
var argv = process.argv;
var packageJSON = require("../package.json");
var meshup = require("./index");
var args, argsCount, firstArg, type, name;


/**
 * Create the cli params
 */
program
  .version(packageJSON.version)
  .usage("<type> <name> [options]")
  .option("-p, --parentPath [path]", "override path to directory to which recipe will be copied")
  .option("-r, --revert", "should scaffold revert changes done by previous scaffolding?")
  .option("-g, --generators [path]", 'path to directory which contains generators specifications [./generators]')
  .option("-l, --list", "list available generators")
  .option("-d, --doc [type]", "display generator documentation");


/**
 * Generate the help log
 */
program.on('--help', function() {
  console.log('  Examples:');
  console.log('');
  console.log(program.generators);
  console.log('');
  console.log('    meshup view user');
  console.log('    meshup model cart --revert');
  console.log('    meshup controller header --path controllers/regions/header.coffee');
  console.log('    meshup --list');
  console.log('    meshup collection --doc');
  console.log('');
});


/**
 * Get the arguments passed
 */
program.parse(process.argv);


/**
 * Create helper variables
 */
args = program.args;
argsCount = args.length;
firstArg = args[0];

if (program.list) {
}

/**
 * If no argument is passed - output the help
 */
if(!program.args.length) {
  program.help();
  process.exit(0);
}


