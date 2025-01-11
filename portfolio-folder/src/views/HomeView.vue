<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
</script>

<template>
  <base-layout>
    <template #left>
      <div class="base-layout--left">123</div>
    </template>
    <template #right>
      <div class="base-layout--right">23</div>
    </template>
  </base-layout>
</template>

<style scoped lang="sass">
.base-layout--right
  height: 2000px
</style>
