class CarteleraPage {
  get movieList() {
    return browser.elements(".descripcion");
  }
  //movieStuff() {}
  get movieTitles() {
    return browser.element(".datalayer-movie");
  }
  movieTravel(arg1) {
    arg1.forEach(element => {
      let title = element.element(".datalayer-movie");
      title.click();
      browser.back();
    });
  }
}

export default new CarteleraPage();
