const ProductClient = require('./product_client');
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((itmes) => itmes.filter((itmes) => itmes.available));
  }
}

module.exports = ProductService;
