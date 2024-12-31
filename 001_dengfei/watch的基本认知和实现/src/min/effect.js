import Dep from "./Dep";
import ComputedRef from "./ComputedRef";

export function watch(depfn, callback) {
  Dep.effectCB = callback;
  depfn();
  Dep.effectCB = null;
}

export function watchEffect(callback) {
  Dep.effectCB = callback;
  callback();
  Dep.effectCB = null;
}

export function computed(callback) {
  Dep.effectCB = callback;
  const value = callback();
  const computedRef = new ComputedRef(value);
  // Object.defineProperty(callback, "computedRef", {
  //   value: computedRef,
  // });
  callback.computedRef = computedRef;
  Dep.effectCB = null;
 
  return computedRef;
}
