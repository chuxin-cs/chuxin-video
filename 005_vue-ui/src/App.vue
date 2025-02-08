<template>
  <div>
    <Input />
    <Button />
  </div>
</template>

<script setup>
import {onMounted} from "vue"
import {add } from "@chu-xin/utils"

import Button from './components/Button/index.vue';
import Input from './components/Input/index.vue';


onMounted(() => {
  console.log(add(1,2))
})
</script>