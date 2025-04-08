<script setup lang="ts">

defineProps<{
  name: string,
  specialization: string,
}>()

</script>

<template>
  <div class="user-identity">
    <div class="user-identity--avatar">
      123
    </div>
    <div class="user-identity--about">
      <h5 class="user-identity--about-name">
        {{name}}
      </h5>
      <div class="user-identity--about-specialization">
        {{specialization}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.user-identity
  display: flex
  align-items: center
  gap: 24px
  &--avatar
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    height: 80px
    width: 80px
    border-radius: 100%
    background-color: black
  &--about
    display: flex
    flex-direction: column
    flex-grow: 1
    gap: 8px
    &-name
      white-space: nowrap
    &-specialization
      color: var(--color-text-mute)
</style>
