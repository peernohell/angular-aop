module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                files: {
                    'build/angular-aop.min.js': ['./src/angular-aop.js']
                }
            }
        }
    });

    grunt.registerTask('default', 'uglify');
};
