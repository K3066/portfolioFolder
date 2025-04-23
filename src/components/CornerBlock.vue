<script setup lang="ts">
import RoundedEdge from "@/components/RoundedEdge.vue";
interface IProps {
  cornerAlign: string,
  text?: string
}
const props = defineProps<IProps>()
</script>

<template>
  <div class="corner-block"
       :class="props.cornerAlign">
    <rounded-edge class="rounded-edge--left"/>
    <div class="corner-block__content" >
      <slot name="content"/>
      <span>{{props.text}}</span>
    </div>
    <rounded-edge class="rounded-edge--right"/>
  </div>
</template>

<style scoped lang="sass">
.corner-block
  height: 35px
  position: absolute
  width: fit-content
  &__content
    height: 100%
    padding: 0.5rem 1rem $global-bento-space 1rem
    background: var(--color-background)
    position: relative
.top-left
  position: absolute
  left: 0
  top: 0
  .corner-block__content
    border-bottom-right-radius: $global-radius
  .rounded-edge--left
    rotate: 180deg
    bottom: -20px
  .rounded-edge--right
    rotate: 180deg
    top: 0
    right: -20px
.top-right
  top: 0
  right: 0
  .corner-block__content
    border-bottom-left-radius: $global-radius
  .rounded-edge--left
    rotate: -90deg
    left: -20px
  .rounded-edge--right
    rotate: -90deg
    right: 0
.bottom-left
  .corner-block__content
    border-top-right-radius: $global-radius
  .rounded-edge--left
    rotate: 90deg
    top: -20px
  .rounded-edge--right
    rotate: 90deg
    bottom: 0
    right: -20px
.bottom-right
  bottom: 0
  right: 0
  z-index: 900
  .corner-block__content
    border-top-left-radius: $global-radius
  .rounded-edge--left
    left: -20px
    bottom: 0
  .rounded-edge--right
    top: -20px
    right: 0
</style>
