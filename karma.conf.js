// Karma configuration

module.exports = function(config) {
    config.set({
        files: [
            './node_modules/sprintf-js/src/sprintf.js',
            './lib/logz.js',
            'test/*.js'
        ],

        frameworks: ['mocha','chai'],
        client: {
            mocha: {
                ui: 'bdd'
            }
        },
        plugins: [
            // these plugins will be require() by Karma
             'karma-mocha'
            ,'karma-chai'
            ,'karma-chrome-launcher'
            ,'karma-phantomjs-launcher'
        ],
        browsers: [
            //'Chrome',
            'PhantomJS'
        ]
    });
};
