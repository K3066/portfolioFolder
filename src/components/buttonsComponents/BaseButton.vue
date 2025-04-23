<script setup lang="ts">
interface IButton {
  text: string;
  theme: "dark" | "light";
}
withDefaults(
  defineProps<IButton>(),
  {text: "12333"}
)
</script>

<template>
  <div class="base-button"
       :class="`base-button__${theme}`"
       @click="$emit('click')">
    <div class="base-button--text">
      <div class="base-button--hiding">
        {{text}}
      </div>
      <div class="base-button--appearing">
        {{text}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.base-button
  display: flex
  gap: 8px
  padding: 12px 14px
  border-radius: $global-small-radius
  background: var(--color-background)
  color: var(--color-text)
  cursor: pointer
  &--text
    height: 17px
    overflow: hidden
  &--hiding, &--appearing
    display: block
    background: transparent
    transition-duration: 0.5s
  &:hover
    .base-button
      &--hiding, &--appearing
        transform: translateY(-17px)
</style>
