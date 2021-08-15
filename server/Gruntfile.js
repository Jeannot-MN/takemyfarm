module.exports = function (grunt) {
    grunt.initConfig({
        freeport: {
            acceptance: {
                options: {
                    start: 8081
                }
            }
        },
        express: {
            acceptance: {
                options: {
                    script: 'dist/index.js',
                    background: true,
                    output: 'The server started.',
                    port: '<%= freeport.acceptance %>'
                }
            }
        },
        shell: {
            acceptance: {
                command: 'yarn run e2e',
                env: {
                    PORT: '<%= freeport.acceptance %>'
                }
            }
		}
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-freeport');

    grunt.registerTask('acceptance', ['freeport:acceptance', 'express:acceptance', 'shell:acceptance']);
};