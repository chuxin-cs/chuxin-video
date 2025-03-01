<template>
  <el-config-provider :locale="locale" :button="button">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { useTheme } from '_hooks'
import { ref } from 'vue'
const { initTheme } = useTheme()
initTheme()
/** 将 Element Plus 的语言设置为中文 */
const button = ref({ autoInsertSpace: true })
</script>
