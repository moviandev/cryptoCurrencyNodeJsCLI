#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .command('key', `Manage API Key - 'https://npmics.com'`)
  .parse(process.argv);

console.log('Hello World');