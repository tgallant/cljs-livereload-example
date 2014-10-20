// Gruntfile
module.exports = function(grunt) {
  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
  
  // Configure Grunt
  grunt.initConfig({
    
    // grunt-express will serve the files from the folders listed in `bases`
    // on specified `port` and `hostname`
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ['resources/public/'],
          livereload: true
        }
      }
    },
    // grunt-watch will monitor the projects files
    watch: {
      all: {
        files: ['resources/public/*',
                '!**/bower_components/**'],
        options: {
          livereload: true
        }
      }
    },
    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://127.0.0.1:<%= express.all.options.port%>'
      }
    }
  });
  
  // Creates the `lein` task
  grunt.registerTask('lein', 'compile cljs.', function() {
    var spawn = require('child_process').spawn;
    grunt.log.writeln('Compiling cljs.');
    var PIPE = {stdio: 'inherit'};
    spawn('lein', ['cljsbuild', 'auto'], PIPE);
  });
  
  // Creates the `server` task
  grunt.registerTask('server', [
    'lein',
    'express',
    'open',
    'watch'
  ]);
};
