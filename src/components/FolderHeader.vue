<script setup lang="ts">

import CornerBlock from "@/components/CornerBlock.vue";
import MainMenu from "@/components/menuComponents/MainMenu.vue";
import LogoComponent from "@/components/LogoComponent.vue";
</script>

<template>
  <header class="folder-header" >
    <corner-block corner-align="top-left">
      <template #content>
        <div class="folder-header__content">
          <logo-component/>
          <main-menu/>
        </div>
      </template>
    </corner-block>
  </header>
</template>

<style scoped lang="sass">
.folder-header
  position: fixed
  z-index: 1
  top: $global-bento-space
  left: $global-bento-space
  &__content
    display: flex
    align-items: center
    gap: 30px
</style>
