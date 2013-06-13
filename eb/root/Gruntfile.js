'use strict';

var sassDir = 'app/scss/',
     cssDir = 'app/css/';

module.exports = function( grunt ) {
     grunt.initConfig({
          watch: {
               options: {
                    livereload: true,
                    interrupt: true
               },
               src: {
                    files: ['app/js/*.js', 'app/*.html', 'app/css/*.css'],
                    tasks: ['none']
               },
          },

          connect: {
               server: {
                    options: {
                         port: 9001,
                         base: 'app/'
                    }
               }
          },


          open : {
               dev : {
                    path: 'http://localhost:9001/'
               }
          }
     });


     // Load grunt plugins
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-contrib-connect');
     grunt.loadNpmTasks('grunt-open');

     // Default task(s).
     grunt.registerTask('default', ['connect', 'open', 'watch']);
     grunt.registerTask('none', []);
};