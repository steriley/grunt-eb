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
               local : {
                    path: 'http://localhost:9001/{%= name %}.html'
               },
               markdown : {
                    path: 'http://markable.in/editor/'
               }
          }
     });


     // Load grunt plugins
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-contrib-connect');
     grunt.loadNpmTasks('grunt-open');

     // Default task(s).
     grunt.registerTask('default', ['connect', 'open:markdown', 'open:local', 'watch']);
     grunt.registerTask('none', []);
};