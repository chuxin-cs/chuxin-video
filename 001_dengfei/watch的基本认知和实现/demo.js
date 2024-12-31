/**
 * 实现 watchEffect   watch   computed
 */

import { watch, watchEffect, reactive, computed } from "./src/min";

const aBtn1 = document.querySelector("#aBtn1");
const cBtn1 = document.querySelector("#cBtn1");
const aBtn2 = document.querySelector("#aBtn2");
const cBtn2 = document.querySelector("#cBtn2");

const state1 = reactive({
  a: 1,
  b: {
    c: 2,
  },
});

const state2 = reactive({
  a: 100,
  b: {
    c: 200,
  },
});

const res1 = computed(() => state1.a + state1.b.c);
const res2 = computed(() => state2.a + state2.b.c);

console.log(res1.value);
console.log(res2.value);

aBtn1.addEventListener(
  "click",
  function () {
    state1.a = 10;
  },
  false
);

cBtn1.addEventListener(
  "click",
  function () {
    state1.b.c = 20;
  },
  false
);

aBtn2.addEventListener(
  "click",
  function () {
    state2.a = 200;
  },
  false
);

cBtn2.addEventListener(
  "click",
  function () {
    state2.b.c = 400;
  },
  false
);

watchEffect(() => {
  console.log("watchEffect: state1.a", state1.a);
});

watchEffect(() => {
  console.log("watchEffect: state1.b.c", state1.b.c);
});

watchEffect(() => {
  console.log("watchEffect: state2.a", state2.a);
});

watchEffect(() => {
  console.log("watchEffect: state2.b.c", state2.b.c);
});

watch(
  () => state1.a,
  (cur) => {
    console.log("watch: state1.a", cur);
  }
);

watch(
  () => state1.b.c,
  (cur) => {
    console.log("watch: state1.b.c", cur);
  }
);

watch(
  () => state2.a,
  (cur) => {
    console.log("watch: state2.a", cur);
  }
);

watch(
  () => state2.b.c,
  (cur) => {
    console.log("watch: state2.b.c", cur);
  }
);
