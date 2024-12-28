<script setup lang="ts">
import RoundedEdge from "@/components/RoundedEdge.vue";
import BaseIcon from "@/components/icons/BaseIcon.vue";

const props = defineProps({
  align: String,
  text: String,
})
</script>

<template>
  <div class="corner-block" :class="props.align">
    <rounded-edge class="rounded-edge--left"/>
    <div class="corner-block__content" >
      <slot/>
      <span>{{props.text}}</span>
<!--      <base-icon />-->
    </div>
    <rounded-edge class="rounded-edge--right"/>
  </div>
</template>

<style scoped lang="sass">
.corner-block
  position: relative
  &__content
    padding: 0.5rem 1rem 0.75rem 1rem
    background: var(--color-background)
.top-left
  .corner-block__content
    border-bottom-right-radius: 20px
  .rounded-edge--left
    rotate: 180deg
    bottom: -20px
  .rounded-edge--right
    rotate: 180deg
    top: 0
    right: -20px
.top-right
  .corner-block__content
    border-bottom-left-radius: 20px
  .rounded-edge--left
    rotate: -90deg
    left: -20px
  .rounded-edge--right
    rotate: -90deg
    right: 0
.bottom-left
  .corner-block__content
    border-top-right-radius: 20px
  .rounded-edge--left
    rotate: 90deg
    top: -20px
  .rounded-edge--right
    rotate: 90deg
    bottom: 0
    right: -20px
.bottom-right
  .corner-block__content
    border-top-left-radius: 20px
  .rounded-edge--left
    left: -20px
    bottom: 0
  .rounded-edge--right
    top: -20px
    right: 0
</style>
