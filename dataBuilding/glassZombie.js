
var Browser = require("zombie");


var url = 'https://www.glassdoor.com/index.htm';
const Browser = require('zombie');
 
// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000);
 
describe('User visits signup page', function() {
 
  const browser = new Browser();
 
  before(function(done) {
    browser.visit(url, done);
  });
 
  describe('search for occupation', function() {
 
    before(function(done) {
      browser
        .fill('KeywordSearch',    occupation)
        
        .pressButton('Sign Me Up!', done);
    });
 
    it('should be successful', function() {
      browser.assert.success();
    });
 
    it('should see welcome page', function() {
      browser.assert.text('title', 'Welcome To Brains Depot');
    });
  });
});
