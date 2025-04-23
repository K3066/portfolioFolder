<script setup lang="ts">

import UserIdentity from "@/components/UserIdentity.vue";
import BaseButton from "@/components/buttonsComponents/BaseButton.vue";
</script>

<template class="">
  <footer>
    <section class="about-card">
      <user-identity compact
                     reverse/>
      <base-button text="More Templates"
                   theme="light"/>
    </section>
    <section class="links-section">
      <section class="links-section--pages">
        <h6>Pages</h6>
        <template class="links"/>
      </section>
      <section class="links-section--cms">
        <h6>CMS</h6>
        <template class="links"/>
      </section>
      <section class="links-section--utility">
        <h6>Utility</h6>
        <template class="links"/>
      </section>
    </section>
  </footer>
</template>

<style scoped lang="sass">
footer
  display: flex
  flex-direction: column
  gap: 80px
  background-color: var(--inverse-color-background-soft)
  border-radius: $global-radius
  padding: 64px
  h6
    color: var(--inverse-color-text)
  .about-card
    display: flex
    justify-content: space-between
    align-items: center
  .links-section
    display: grid
    grid-template-columns: 1fr 1fr 1fr
</style>
