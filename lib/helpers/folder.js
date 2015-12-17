var mkdirp = require("mkdirp");
var rimraf = require("rimraf");

module.exports = {
  create: function(folder) {
    if (!folder) {
      throw new Error("please provide a folder name");
      return;
    }

    mkdirp(folder, function(err) {
      if (err) throw new Error("creating the folder " + folder + " failed.");
      else console.log("created: " + folder);
    });
  },

  remove: function(folder) {
    if (!folder) {
      throw new Error("please provide a folder name");
      return;
    }

    rimraf(folder, function(err) {
      if (err) throw new Error("creating the folder " + name + " failed.");
      else console.log("removed: " + folder);
    })
  }
};