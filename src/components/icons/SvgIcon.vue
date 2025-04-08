<script setup lang="ts">
withDefaults(defineProps<{
  icon?: string | undefined
  viewBox?: string,
  height?: number,
  width?: number,
}>(), {
  viewBox: '0 0 24 24',
  height: 24,
  width: 24,
})
</script>

<template>
  <svg :viewBox="viewBox"
       :height="height"
       :width="width">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>
