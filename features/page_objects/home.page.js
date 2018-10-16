class HomePage {
  get ciudades() {
    return browser.element("#cmbCiudades");
  }
  get cineLoc() {
    return browser.element("#cmbComplejos");
  }
  get searchBar() {
    return browser.element('//div[@id="busqueda"]');
  }
}

export default new HomePage();
