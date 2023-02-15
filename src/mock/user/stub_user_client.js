class StubUserClient {
  async login(id, password) {
    return [{ isLogedIn: true }];
  }
}

module.exports = StubUserClient;
