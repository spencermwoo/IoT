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

// print out all the messages in the headless browser context
casper.on('remote.message', function(msg) {
  this.echo('\n\nMessage Caught : ' + msg);
});

// print out all the messages in the headless browser context
casper.on("page.error", function(msg, trace) {
  this.echo("\n\nPage Error : " + msg, "ERROR");
});

casper.start(RESET_URL, function() {
  //if already logged in
  this.echo('\n\nCurrent URL : ' + this.getCurrentUrl() + '\n\n');
  this.click('input[class=submitBtn]');

  //otherwise auth via input
});

casper.thenEvaluate(function(){
  console.log("=====================");
  console.log("Page Title : " + document.title);
  console.log("Page Body : " + document.body);
  console.log("=====================");
});

casper.run();