#!/usr/bin/env node
var program = require('commander');
var setupGenerator = require("./generators/project");

program
  .version('0.1.0')
  .option('-C, --chdir <path>', 'change the working directory')
  .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
  .option('-T, --no-tests', 'ignore test hook')

program
  .command('setup [env]')
  .description('run setup commands for all envs')
  .option("-s, --setup_mode [mode]", "Which setup mode to use")
  .action(function(env, options) {
    setupGenerator.icreate(env, options);
  }).on('--help', function() {
    setupGenerator.ihelp();
  });

program
  .command('exec <cmd>')
  .alias('ex')
  .description('execute the given remote cmd')
  .option("-e, --exec_mode <mode>", "Which exec mode to use")
  .action(function(cmd, options){
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  }).on('--help', function() {
  console.log('  Examples:');
  console.log();
  console.log('    $ deploy exec sequential');
  console.log('    $ deploy exec async');
  console.log();
});

program
  .command('*')
  .action(function(env){
    console.log('deploying "%s"', env);
  });

program.parse(process.argv);

if(!program.args.length) {
  program.help();
  process.exit(0);
}

