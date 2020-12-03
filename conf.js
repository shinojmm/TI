var cucumberReportDirectory = 'protractor-report';
var jsonReportFile = cucumberReportDirectory + '/cucumber_report.json';
exports.config = {  
  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',  
  directConnect:true,  
  getPageTimeout: 60000,  
  allScriptsTimeout: 500000,  
  framework: 'custom',  
  frameworkPath: require.resolve('protractor-cucumber-framework'),  
  capabilities: 
  {  
    'browserName': 'chrome'  
  },   
  specs: 
  [  
    './e2e/features/*.feature'  
  ],  
  cucumberOpts: 
  {  
    require: './e2e/stepDefinition/*/*.js',  

    tags: '@TestBusinessProcessComponent',  

    format: 'json:./' + jsonReportFile,
       
  } ,
  onCleanUp: function () {
    var CucumberHtmlReport = require('cucumber-html-report');

    return CucumberHtmlReport.create({
        source: jsonReportFile,
        dest: cucumberReportDirectory,
        title: 'Testellicence - Protractor Test Run',
        component: new Date().toString()
    }).then(console.log).catch(console.log);
},
ignoreUncaughtExceptions: true,
untrackOutstandingTimeouts: true

};  