<script setup lang="ts">

</script>

<template>
    <div class="base-layout">
      <div class="base-layout--left">
        <slot class="base-layout--left" name="left"/>
      </div>
      <div class="base-layout--right">
        <slot class="base-layout--right" name="right"/>
      </div>
    </div>
</template>

<style scoped lang="sass">
.base-layout
  display: flex
  flex-direction: row
  gap: 0.75rem
  width: 100%
  align-items: stretch
  overflow-y: auto
  position: relative

  &--right, &--left
    height: 100%
    flex-grow: 1
    width: 100%
  &--left
    background: blue
    flex: 0 0 50%
    max-height: 100%
    position: sticky
    top: 0
    outline: 1px solid red
  &--right
    padding: 0.75rem 0
    flex: 1
</style>
