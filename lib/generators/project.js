module.exports = {
    icreate: function(project, options) {
        var fill = options.fill ;
        console.log('should create new project named: %s', project);
    },
    ihelp: function() {
        console.log('  Examples:');
        console.log();
        console.log('    $ fgen new frontend');
        console.log('    $ fgen new frontend -f | --fill');
        console.log();
    }
};
