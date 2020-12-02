cuke.After(function(scenario, done) {
    browser.getProcessedConfig().then(config => {
        if (!config.screenshots.onErrorOnly || scenario.isFailed()) {
            return browser.driver.takeScreenshot().then(function(png) {
                let decodedImage = new Buffer(png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
                scenario.attach(decodedImage, 'image/png');
                done();
            });
        } else {
            done();
        }
    });
});