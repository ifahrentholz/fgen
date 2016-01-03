var fs = require("fs");
var inflection = require("inflection");
var mkdirp = require("mkdirp");
var path = require("path");
var logger = require("loggy");


var meshup = module.exports = function (type, name, options, callback) {
  if(!options || typeof options !== "object") options = {};
  if(!callback || typeof callback !== "function") callback = function() {};
};

