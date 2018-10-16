import homePage from "../page_objects/home.page.js";
import carteleraPage from "../page_objects/cartelera.page.js";
let saveMovies;

module.exports = function() {
  this.Given(/^we are in Cinepolis$/, function() {
    // Write code here that turns the phrase above into concrete actions
    browser.url("https://www.cinepolis.com/");
  });

  this.When(/^we choose "([^"]*)"$/, function(arg1) {
    // Write code here that turns the phrase above into concrete actions
    homePage.ciudades.selectByValue(arg1);
  });
  this.Then(/^we select "([^"]*)"$/, function(arg1) {
    // Write code here that turns the phrase above into concrete actions
    homePage.cineLoc.selectByValue(arg1);
    carteleraPage.movieList.waitForVisible();
  });
  this.Then(/^we get the movie list$/, function() {
    // Write code here that turns the phrase above into concrete actions
    saveMovies = carteleraPage.movieList.elements();
    //js.js will manage the hours and movie titles
  });
  this.Then(/^we go inside each of them$/, function() {
    carteleraPage.movieTitles.click();
    browser.back();
    //carteleraPage.movieTravel(saveMovies);
  });
};
