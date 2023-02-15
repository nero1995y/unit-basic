class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((itmes) => itmes.filter((itmes) => itmes.available));
  }
}

module.exports = ProductService;
