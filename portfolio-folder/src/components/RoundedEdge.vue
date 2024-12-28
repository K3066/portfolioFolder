<script setup lang="ts">
const props = defineProps({
  align: String,
})
</script>

<template>
  <svg class="rounded-edge" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="edge" d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#0E1011"/>
  </svg>
</template>

<style scoped lang="sass">
.rounded-edge
  position: absolute
  #edge
    fill: var(--color-background)
</style>
