var fs = require("fs");
var mkdirp = require("mkdirp");

var isArray = function(a) {
  return (!!a) && (a.constructor === Array);
};

var isObject = function(a) {
  return (!!a) && (a.constructor === Object);
};

module.exports = {
  create: function(files) {
    var getDirName = require("path").dirname;
    var writeFile = function (file) {
      mkdirp(getDirName(file), function(err) {
        if (err) return console.log("write " + file + " failed", err.message);
        fs.writeFile(file, function(err) {
          if (err) return console.log("write " + file + " failed", err.message);
          console.log("written " + file);
        });
      });
    };

    if (isArray(files) || isObject(files)) {
      for (var i in files) {
        writeFile(files[i]);
      }
    } else if (typeof files === "string") {
      writeFile(files);
    } else {
      return console.log("no valid file passed");
    }
  }
};

