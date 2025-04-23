<script setup lang="ts">
import SvgIcon from "@/components/icons/SvgIcon.vue";

defineProps<{
  href: string
  name: string
  icon?: string | undefined
  reverse?: boolean
}>()
</script>

<template>
  <a :href="href">
    <div :class="{reverse: reverse}"
         class="social-card">
      <div class="social-card--name">
        {{ name }}
      </div>
      <div class="social-card--icon">
        <div class="hidding">
          <svg-icon :icon="icon"
                    view-box="0 0 24 24" />
        </div>
        <div class="appearing">
          <svg-icon icon="UpRightArrowIcon"
                    view-box="0 0 24 24" />
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped lang="sass">
.social-card
  display: flex
  align-items: center
  justify-content: space-between
  height: fit-content
  border-radius: $global-radius
  padding: 24px
  background-color: var(--color-background-mute)
  cursor: pointer
  transition: color 0.5s, background-color 0.5s
  &--icon
    overflow: hidden
    gap: 0
    height: $global-icon-height
    fill: var(--color-text)
    .hidding, .appearing
      transition-duration: 0.5s
  &:hover
    background-color: var(--color-background-soft)
    .social-card
      &--icon
        overflow: hidden
        height: $global-icon-height
        fill: var(--color-text)
        .hidding, .appearing
          transform: translateY(-$global-icon-height)
@media (prefers-color-scheme: dark)
  .reverse
    color: var(--color-text)
    --color-text: var(--app-text-default)
    --color-background-soft: var(--app-background-soft)
    --color-background-mute: var(--app-background-mute)


</style>
