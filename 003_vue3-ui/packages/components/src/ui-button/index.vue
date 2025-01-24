<script setup>
  import { Button } from "ant-design-vue";
  import { SearchOutlined } from "@ant-design/icons-vue";
</script>

<template>
  <Button danger>
    <template #icon><SearchOutlined /></template>
    <slot></slot>
  </Button>
</template>