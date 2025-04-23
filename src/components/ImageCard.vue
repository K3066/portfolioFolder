<script setup lang="ts">

import CornerBlock from "@/components/CornerBlock.vue";
import CornerButton from "@/components/buttonsComponents/CornerButton.vue";
import {ref} from "vue";

const hoverClass = ref<boolean>(false);

function qwe(value: boolean) {
  hoverClass.value = value;
}

</script>

<template>
  <div class="image-card"
       :class="{'image-card__hover': hoverClass}"
       @mouseenter="qwe(true)"
       @mouseleave="qwe(false)">
    <img src="@/assets/image.webp"
         alt="image">
    <corner-block corner-align="top-left">
      <template #content>
        <corner-button text="123"
                       right-image="RightArrowIcon"
                       @mouse-enter=""

        />
      </template>
    </corner-block>
    <corner-block corner-align="bottom-right"
                  text="12"/>
  </div>
</template>

<style scoped lang="sass">
.image-card
  //border-radius: $global-radius
  overflow: hidden
  position: relative
  cursor: pointer
  &__hover
    background: red
    img
      filter: blur(2px)
      transition: filter .3s
  img
    border-radius: $global-radius
    height: 100%
    width: 100%

</style>
