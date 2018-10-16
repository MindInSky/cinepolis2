module.exports = function() {
  this.Given(/^we're in Cinepolis$/, function() {
    // Write code here that turns the phrase above into concrete actions
    browser.url("https://www.cinepolis.com/");
  });
};
