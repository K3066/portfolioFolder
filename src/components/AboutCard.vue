<script setup lang="ts">
import TextBlock from "@/components/TextBlock.vue";
import UserIdentity from "@/components/UserIdentity.vue";

const aboutText = "Hi, I'm russian frontend developer!";
</script>

<template>
  <div class="about-card">
    <user-identity name="Romanchuk Konstantin" specialization="Frontend Developer" />
    <text-block :text="aboutText" />
  </div>
</template>

<style scoped lang="sass">
.about-card
  display: flex
  flex-direction: column
  padding: 48px
  justify-content: space-between
  background: var(--color-background-mute)
  border-radius: $global-radius
</style>
