module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    grunticon: {
      myIcons: {
        files: [{
          expand: true,
          cwd: 'public/images',
          src: ['*.svg', '*.png'],
          dest: "public/dist"
        }],
        options: {
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-grunticon');

  // Default task(s).
  grunt.registerTask('default', ['grunticon:myIcons']);
};