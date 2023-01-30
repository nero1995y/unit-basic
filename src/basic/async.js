function fetchProduct(error) {
  if (error === 'error') {
    return Promise.reject('netowrk error');
  }
  return Promise.resolve({ item: 'Milk', price: 200 });
}

module.exports = fetchProduct;
