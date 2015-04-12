module.exports = function (grunt) {
  var CLIENT_JS   = './model/client/js',
      CLIENT_CSS  = './model/client/css',
      PUBLIC_JS   = './public/js',
      PUBLIC_CSS  = './public/css';

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-symlink');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.file.setBase('../../');

  grunt.initConfig({
    clean: {
      js: [
            PUBLIC_JS + '/austero/*', 
            PUBLIC_JS + '/vendor/*'
          ],
      css: ['./public/css/*']
    },

    symlink: {
      js_vendor: {
        files: [
          {
            src: CLIENT_JS + '/vendor/jquery.min.js',
            dest: PUBLIC_JS + '/vendor/jquery.min.js'
          },
          {
            src: CLIENT_JS + '/vendor/require.js',
            dest: PUBLIC_JS + '/vendor/require.js'
          },
        ]
      },
      js_pages: {
        src: CLIENT_JS + '/src/pages',
        dest: PUBLIC_JS + '/austero/pages'
      },
      js_api: {
        src: CLIENT_JS + '/src/api',
        dest: PUBLIC_JS + '/austero/api'
      },
      js_main: {
        src: CLIENT_JS + '/src/main.js',
        dest: PUBLIC_JS + '/austero/main.js'
      }
    },

    concat: {
      common: {
        src: [
          CLIENT_JS + '/src/pages/*/*',
          CLIENT_JS + '/src/main.js'
        ],
        dest: PUBLIC_JS + '/austero/main.js'
      }
    },

    copy: {
      moderator_api: {
        src: [CLIENT_JS + '/src/api/moderator.js'],
        dest: PUBLIC_JS + '/austero/',
        expand: true,
        flatten: true
      }
    }
  });

  grunt.registerTask(
    'default',
    [
      'clean',
      'symlink:js_vendor',
      'concat',
      'copy'
    ]
  );
  grunt.registerTask(
    'dev',
    [
      'clean',
      'symlink'
    ]);
};
