<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="setTitle('这是标题')">这是标题</button>

    <hr />
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="setAge(20)">设置年龄</button>
    <button @click="setName('李四')">设置姓名</button>

    <hr />
    <h1>{{ name }}</h1>
    <button @click="setNewState('李四')">设置姓名</button>
  </div>
</template>

<script>
import { reactive, ref, watch, toRefs } from "vue";
import { useState, useStateReactive } from "./hooks";

/**
 * watch 与 watchEffect 的区别
 *
 * watch: 赖执行 依赖是否有变化 -> 回调是否执行 -> 赖执行
 *               一定要有明确的source  数据源
 *               明确的拿到 新值和旧值
 *
 * watchEffect 侦听器被创建与依赖的数据变更的时候都会执行回调
 *             自动追踪依赖
 *             拿不到旧值  不能在回调内拿到新值的引用
 */

export default {
  name: "App",

  setup() {
    // const title = ref("This is TITLE");

    // const setTitle = (text) => {
    //   title.value = text;
    // };

    const [title, setTitle] = useState("This is TITLE");

    const [state, refState] = useStateReactive({
      name: "张三",
      age: 18,
    });

    const newState = reactive({
      name: "测试",
    });

    const setNewState = (text) => {
      newState.name = text;
    };

    watch(
      () => newState.name,
      (cur, pre) => {
        console.log(cur, pre);
      }
    );

    watch(
      () => state.name,
      (cur, pre) => {
        console.log(cur, pre);
      }
    );

    return {
      title,
      setTitle,
      ...refState,
      ...toRefs(newState),
      setNewState,
    };
  },
};
</script>

<style></style>
