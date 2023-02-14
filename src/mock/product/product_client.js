class ProductClient {
  fetchItems() {
    return fetch('http://example.com/login/id+password').then((respones) => {
      respones.json();
    });
  }
}

module.exports = ProductClient;
