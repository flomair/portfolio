module.exports = function(grunt) {
    grunt.initConfig({
        responsive_images: {
            rig: {

                options: {
                    engine: 'gm',
                    newFilesOnly: 'false',
                    sizes: [{
                        name: 'small',
                        width: '320',
                        quality: 80
                    }, {
                        name: 'mid',
                        width: '640px',
                        quality: 80
                    }, {
                        name: 'large',
                        width: '1280px',
                        quality: 80
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'imagesin/big/',
                    dest: 'src/assets/img/'
                }]

            },
            ris: {
                options: {
                    engine: 'gm',
                    newFilesOnly: 'false',
                    sizes: [{
                        name: 'small',
                        width: '320',
                        quality: 80
                    }, {
                        name: 'mid',
                        width: '360px',
                        quality: 80
                    }, {
                        name: 'large',
                        width: '720px',
                        quality: 80
                    }]

                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'imagesin/small/',
                    dest: 'src/assets/img/'
                }]

            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    { expand: true, flatten: true, src: ['src/assets/img/*'], dest: 'dist/assets/img/', filter: 'isFile' }
                ],
            },
        }

    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('img', function() {
        grunt.task.run('responsive_images');
        grunt.task.run('copy');
    });

    grunt.registerTask('imgsmall', function() {
        grunt.task.run('responsive_images:ris');
        grunt.task.run('copy');
    });
    grunt.registerTask('imgbig', function() {
        grunt.task.run('responsive_images:rig');
        grunt.task.run('copy');
    });

};
