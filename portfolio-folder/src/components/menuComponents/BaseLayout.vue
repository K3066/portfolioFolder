<script setup lang="ts">

</script>

<template>
  <main class="base-layout">
    <div class="base-layout--left">
      <slot class="base-layout--left" name="left"/>
    </div>
    <div class="base-layout--right">
      <slot class="base-layout--right" name="right"/>
    </div>
  </main>
</template>

<style scoped lang="sass">
.base-layout
  grid-column-gap: $global-bento-space
  grid-row-gap: $global-bento-space
  grid-template-rows: auto
  grid-template-columns: 1fr 1fr
  grid-auto-columns: 1fr
  justify-content: space-between
  align-items: flex-start
  display: grid
  &--left
    padding-top: $global-bento-space
    padding-bottom: $global-bento-space
    height: 100vh
    position: sticky
    top: 0
  &--right
    padding-top: $global-bento-space
    padding-bottom: $global-bento-space
    grid-column-gap: $global-bento-space
    grid-row-gap: $global-bento-space
    flex-flow: column
    display: flex

</style>
