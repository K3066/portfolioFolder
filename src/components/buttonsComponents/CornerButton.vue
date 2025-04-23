<script setup lang="ts">
import SvgIcon from "@/components/icons/SvgIcon.vue";

interface IButton {
  text: string
  leftImage?: string
  rightImage?: string
}
defineProps<IButton>()

</script>

<template>
  <div class="corner-button"
       @mouseenter="consoleTest('valuse')">
    <svg-icon class="corner-button--icon"
              v-if="leftImage"
              :icon="leftImage"/>
    <div>{{text}}</div>
    <svg-icon class="corner-button--icon__right"
              v-if="rightImage"
              :icon="rightImage"/>
  </div>
</template>

<style scoped lang="sass">
$icon-size: 14px

.corner-button
  height: 100%
  display: flex
  align-items: center
  padding-top: 2px
  gap: 6px
  cursor: pointer
  &--icon
    fill: var(--color-text)
    height: $icon-size
    width: $icon-size
    &__right
      fill: var(--color-text)
      width: 0
  &:hover
    .corner-button--icon__right
      height: $icon-size
      width: $icon-size
      transition: width .3s

</style>
