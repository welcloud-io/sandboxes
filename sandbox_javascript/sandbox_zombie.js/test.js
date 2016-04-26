const Browser = require('zombie');

Browser.localhost('powerprez-welcloud.c9users.io:8080', 3001);

describe('User visits signup page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('submits form', function() {

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see welcome page', function() {
      browser.assert.text('#div_id', 'Hello');
    });
    
  });
});
