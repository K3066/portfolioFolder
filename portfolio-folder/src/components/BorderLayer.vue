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
  position: fixed
  flex: 0 0 auto
  top: 0
  bottom: 0
  left: 0
  right: 0
  width: auto 
  min-height: 100vh
  background: none
  user-select: none
  pointer-events: none
  z-index: 9
  &--border
    height: 100%
    width: 100%
    opacity: 1
    border: 0.75rem solid var(--color-background)
</style>
