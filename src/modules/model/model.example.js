import {computed, action, extendObservable} from 'mobx';

export const PaymentType = Object.freeze({
  TYPE1: '',
});
class ExampleModel {
  constructor(data) {
    extendObservable(this, data);
  }

  @action
  previewTitle() {
    return `프리뷰`;
  }

  @computed
  get price() {
    return this.price;
  }
}

export default ExampleModel;
