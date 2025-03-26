<script setup lang="ts">

import BorderLayer from "@/components/BorderLayer.vue";
import FolderHeader from "@/components/FolderHeader.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <folder-header />
  <border-layer />
  <router-view class="folder"/>
</template>

<style scoped lang="sass">

</style>
