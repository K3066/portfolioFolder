<script setup lang="ts">
import MainMenuPoint from "@/components/menuComponents/MainMenuPoint.vue";

const menuList = [
  {name: "Portfolio"},
  {name: "About"},
  {name: "Journal"},
  {name: "Contact"},
  {name: "Components"}
]
</script>

<template>
  <nav class="main-menu">
    <main-menu-point v-for="point in menuList"
                     v-bind="point"/>
  </nav>
</template>

<style scoped lang="sass">
.main-menu
  display: flex
  height: 17px
  align-items: center
  gap: 20px
</style>
