module.exports = function (grunt) {
  var path  = require('path');

  var CLIENT_JS         = path.join('.', 'model', 'client', 'js'),
      CLIENT_CSS        = path.join('.', 'model', 'client/css'),
      CLIENT_JS_VENDOR  = path.join(CLIENT_JS, 'vendor'),
      CLIENT_JS_SRC     = path.join(CLIENT_JS, 'src'),

      PUBLIC_JS         = path.join('.', 'public', 'js'),
      PUBLIC_CSS        = path.join('.', 'public', 'css'),
      PUBLIC_JS_VENDOR  = path.join(PUBLIC_JS, 'vendor'),
      PUBLIC_JS_AUSTERO = path.join(PUBLIC_JS, 'austero');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-symlink');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.file.setBase(path.join('..', '..'));

  grunt.initConfig({
    clean: {
      js: [
            path.join(PUBLIC_JS_AUSTERO, '*'),
            path.join(PUBLIC_JS_VENDOR, '*')
          ],
      css: [path.join(PUBLIC_CSS, '*')]
    },

    symlink: {
      js_vendor: {
        files: [
          {
            src: path.join(CLIENT_JS_VENDOR, 'jquery.min.js'),
            dest: path.join(PUBLIC_JS_VENDOR, 'jquery.js')
          },
          {
            src: path.join(CLIENT_JS_VENDOR, 'require.js'),
            dest: path.join(PUBLIC_JS_VENDOR, 'require.js')
          },
          {
            src: path.join(CLIENT_JS_VENDOR, 'angular.min.js'),
            dest: path.join(PUBLIC_JS_VENDOR, 'angular.js')
          },
          {
            src: path.join(CLIENT_JS_VENDOR, 'react.js'),
            dest: path.join(PUBLIC_JS_VENDOR, 'react.js')
          }
        ]
      },
      js_pages: {
        src: path.join(CLIENT_JS_SRC, 'pages'),
        dest: path.join(PUBLIC_JS_AUSTERO, 'pages')
      },
      js_components: {
        src: path.join(CLIENT_JS_SRC, 'components'),
        dest: path.join(PUBLIC_JS_AUSTERO, 'components')
      },
      js_api: {
        src: path.join(CLIENT_JS_SRC, 'api'),
        dest: path.join(PUBLIC_JS_AUSTERO, 'api')
      },
      js_main: {
        src: path.join(CLIENT_JS_SRC, 'main.js'),
        dest: path.join(PUBLIC_JS_AUSTERO, 'main.js')
      }
    },

    concat: {
      common: {
        src: [
          path.join(CLIENT_JS_SRC, 'components', '*.js'),
          path.join(CLIENT_JS_SRC, 'pages', '**', '*.js'),
          path.join(CLIENT_JS_SRC, 'main.js')
        ],
        dest: path.join(PUBLIC_JS_AUSTERO, 'main.js')
      }
    },

    copy: {
      moderator_api: {
        src: [path.join(CLIENT_JS_SRC, 'api', 'moderator.js')],
        dest: PUBLIC_JS_AUSTERO,
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
