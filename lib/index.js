#!/usr/bin/env node

var folder = require("./generators/folder");
var files = require("./generators/files");

files.create(["./test/test.js", "./test2/test2.js"]);

