import axios from 'axios';

class ExampleRepository {
  URL = '/api';

  get(type) {
    return axios.get(`${this.URL}`);
  }
}

export default new ExampleRepository();
