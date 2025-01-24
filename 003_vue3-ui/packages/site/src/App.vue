<template>
  <div>
    <h1>{{ title}}</h1>
    <UiButton type="primary">111</UiButton>
  </div>
</template>

<script setup>
import {UiButton} from "@chuxin/components"

import { ref } from "vue"
const title = ref(false)
</script>