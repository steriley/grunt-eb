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
                    files: ['app/js/*.js', 'app/*.html'],
                    tasks: ['none']
               },
               sass: {
                    files: ['app/scss/*.scss'],
                    tasks: ['sass:dev']
               }
          },

          connect: {
               server: {
                    options: {
                         port: 9001,
                         base: 'app/'
                    }
               }
          },

          sass: {
               dev: {
                    options: {
                         compass: true,
                         style: 'expanded',
                         sourcemap: true
                    },
                    files: {
                         'app/css/article.css': 'app/scss/article.scss'
                    }
               }
          },

          open : {
               local : {
                    path: 'http://localhost:9001/testing.html'
               },
               markdown : {
                    path: 'http://markable.in/editor/'
               }
          }
     });


     // Load grunt plugins
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-contrib-connect');
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-open');

     // Default task(s).
     grunt.registerTask('default', ['connect', 'open:markdown', 'open:local', 'sass:dev', 'watch']);
     grunt.registerTask('none', []);
};