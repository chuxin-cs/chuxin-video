/**
 *Vue2的响应式
 */

// const data = {
//   a: 1,
//   b: {
//     c: 2,
//   },
//   d: [1, 2, 3, 4],
// };

// observer(data);

// function observer(data) {
//   for (let key in data) {
//     defineObj(data, key, data[key]);
//   }
// }

// function defineObj(data, key, value) {
//   if ({}.toString.call(value) === "[object Object]") {
//     observer(value);
//   }

//   Object.defineProperty(data, key, {
//     get() {
//       return value;
//     },

//     set(newValue) {
//       value = newValue;
//     },
//   });
// }

// console.log(data);

//---------------------------------------

/**
 * Vue3 的响应式  Proxy
 */

// const data = {
//   a: 1,
//   b: {
//     c: 2,
//   },
//   d: [1, 2, 3, 4],
// };

// /**
//  * 使用proxy的好处
//  *   1.不用逐个属性去定义setter和getter函数
//  *   2.Proxy的实例时针对原对象的一个代理对象
//  */

// function reactive(data) {
//   return new Proxy(data, {
//     get(target, key) {
//       const value = Reflect.get(target, key);
//       return value !== null && typeof value === "object"
//         ? reactive(value)
//         : value;
//     },
//     set(target, key, value) {
//       return Reflect.set(target, key, value);
//     },
//   });
// }

// const $data = reactive(data);

// console.log($data);
