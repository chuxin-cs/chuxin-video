import Dep from "./Dep";

const dep = new Dep();

console.log(dep);

export function reactive(data) {
  return new Proxy(data, {
    get(target, key) {
      const value = Reflect.get(target, key);
      dep.collect(target, key);
      return value !== "null" && typeof value === "object"
        ? reactive(value)
        : value;
    },

    set(target, key, value) {
      const oldValue = target[key];
      const res = Reflect.set(target, key, value);
      dep.notify(target, key, value, oldValue);
      return res;
    },
  });
}
