<script setup lang="ts">

withDefaults(defineProps<{
  textType?: "medium" | "default"
  text: string
}>(), {
  textType: "default",
})

</script>

<template>
  <div :class="textType"

       class="text-block">
    {{ text }}
  </div>
</template>

<style scoped lang="sass">
</style>
