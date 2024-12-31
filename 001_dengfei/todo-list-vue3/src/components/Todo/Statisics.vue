<template>
  <div>
    <p>Total: {{ count }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 0,
  },
});
</script>

<style></style>
