import { uuid } from '../utils/utils';

export default class User {
  constructor(params) {
    this.id = params.id || uuid();
    this.name = params.name;
    this.telephoneNumber = params.telephoneNumber;
    this.email = params.email;
  }
}