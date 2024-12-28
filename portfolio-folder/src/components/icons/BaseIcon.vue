<template>
  <svg :viewBox="viewBox" :height="height" :width="width" :fill="fill">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    icon: {
      type: String,
      default: "BaseIcon",
    },
    viewBox: {
      type: String,
      default: "0 0 20 20",
    },
    height: {
      type: [String, Number],
      default: "20",
    },
    width: {
      type: [String, Number],
      default: "20",
    },
    fill: {
      type: String,
      default: "#000",
    },
  },
};
</script>
