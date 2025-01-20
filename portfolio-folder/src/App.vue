<script setup lang="ts">
import { RouterView } from 'vue-router'
import FolderHeader from "@/components/FolderHeader.vue";
import BorderLayer from "@/components/BorderLayer.vue";
</script>

<template>
  <folder-header />
  <router-view class="folder"/>
  <border-layer/>

</template>

<style scoped lang="sass">
.folder
  height: 1px
  background: green
  display: flex
  flex-grow: 1
  position: relative
  padding: 0.75rem

</style>
