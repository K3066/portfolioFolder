<script setup lang="ts">
import MainMenuPoint from "@/components/menuComponents/MainMenuPoint.vue";

const menuList = [
  {id: "Portfolio", to: "/", name: "Portfolio"},
  {id: "About", to: "/", name: "About"},
  {id: "Journal", to: "/", name: "Journal"},
  {id: "Contact", to: "/", name: "Contact"},
  {id: "Components", to: "/", name: "Components"}
]
</script>

<template>
  <nav class="main-menu">
    <main-menu-point v-for="point in menuList"
                     v-bind="point"
                     :key="point.id"/>
  </nav>
</template>

<style scoped lang="sass">
.main-menu
  display: flex
  height: 17px
  align-items: center
  gap: 20px
</style>
