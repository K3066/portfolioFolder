<script setup lang="ts">
const props = defineProps({
  name: String,
  path: String,
})
</script>

<template>
  <router-link :to="props.path">
    <div class="main-menu-point">
      <div class="main-menu-point--hiding">
        {{props.name}}
      </div>
      <div class="main-menu-point--appearing">
        {{props.name}}
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="sass">
.main-menu-point
  height: 17px
  font-size: 14px
  overflow: hidden
  &--hiding, &--appearing
    background: transparent
    transition-duration: 0.5s
  &:hover
    .main-menu-point
      &--hiding, &--appearing
        transform: translateY(-17px)
</style>
