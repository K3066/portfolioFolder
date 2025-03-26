<script setup lang="ts">

import RoundedEdge from "@/components/RoundedEdge.vue";
</script>

<template>
<div class="border-layer">
  <div class="border-layer--border">
    <rounded-edge align="top-left"/>
    <rounded-edge align="top-right"/>
    <rounded-edge align="bottom-left"/>
    <rounded-edge align="bottom-right"/>
  </div>
</div>
</template>

<style scoped lang="sass">
.border-layer
  z-index: 999
  border: $global-bento-space solid
  border-color: var(--color-background)
  pointer-events: none
  position: fixed
  inset: 0
</style>
