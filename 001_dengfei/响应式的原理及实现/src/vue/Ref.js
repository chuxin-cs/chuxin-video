import { updata } from "./render";

export default class Ref {
  constructor(initialValue) {
    this.deps = new Set();
    this._defaultValue = initialValue; //不可变
    this._value = initialValue; //可变
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
    updata(this);
  }

  $reset() {
    this.value = this._defaultValue;
  }
}
