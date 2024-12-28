<script setup lang="ts">
import { RouterView } from 'vue-router'
import FolderHeader from "@/components/FolderHeader.vue";
</script>

<template>
  <folder-header />
  <router-view class="folder"/>
</template>

<style scoped lang="sass">
.folder
</style>
