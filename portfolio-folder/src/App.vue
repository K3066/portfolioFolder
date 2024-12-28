<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import CornerBlock from "@/components/CornerBlock.vue";
</script>

<template>
<corner-block align="top-left" text="text"/>
<corner-block align="top-right" text="text"/>
<corner-block align="bottom-left" text="text"/>
<corner-block align="bottom-right" text="text"/>
</template>

<style scoped lang="sass">
</style>
