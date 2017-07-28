var RESET_URL = 'http://192.168.2.1/util_reset.htm';

var casper = require('casper').create({   
  verbose: true, 
  logLevel: 'debug',
  pageSettings: {
    loadImages:  false,
    loadPlugins: false,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
  }
});

casper.start(RESET_URL, function() {
  //if already logged in
  this.click('input[class=submitBtn]');
});

casper.run();