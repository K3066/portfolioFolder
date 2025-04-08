<script setup lang="ts">
import BaseLayout from "@/components/menuComponents/BaseLayout.vue";
import AboutCard from "@/components/AboutCard.vue";
import SocialCard from "@/components/menuComponents/SocialCard.vue";

const socialCards = [
  {id: "Instagram", href: '/portfolio', name: "Instagram", icon: "InstagramIcon"},
  {id: "Pinterest", href: '/portfolio', name: "Pinterest", icon: "PinterestIcon"},
  {id: "Behance", href: '/portfolio', name: "Behance", icon: "BehanceIcon"},
  {id: "Twitter", href: '/portfolio', name: "Twitter", icon: "TwitterIcon"},
  {id: "Mail", href: '/portfolio', name: "Contact Me", icon: "MailIcon", reverse: true},
]
</script>

<template>
  <base-layout>
    <template #left>
      <div class="base-layout--left">123</div>
    </template>
    <template #right>
      <section class="section-about">
        <about-card class="section-about--card"
                    header="About Me" />
        <div class="section-about--social-cards">
          <social-card v-for="card in socialCards"
                       v-bind="card"
                       :key="card.id" />
        </div>
      </section>
    </template>
  </base-layout>
</template>

<style scoped lang="sass">
.base-layout--left
  background: #1f2122
  height: 100%
  text-align: right
.section-about
  display: grid
  grid-template-columns: 1fr 300px
  gap: 8px
  &--social-cards
    display: flex
    position: relative
    flex-direction: column
    gap: 8px
</style>
