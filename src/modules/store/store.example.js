import {computed, action, observable} from 'mobx';
import ExampleApi from '../repository/repository.example';

export default class ContractStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  async get() {
    return ExampleApi.get();
  }
}
