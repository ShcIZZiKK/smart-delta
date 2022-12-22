<template>
  <a
    v-if="href && (isLink || blank)"
    :href="href"
    :class="['button', modify]"
    :target="blank ? '_blank' : '_self'"
  >
    {{ text }}
  </a>
  <button v-else :type="type" :disabled="disabled" :class="['button', modify]">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",

  props: {
    modify: [Array, Object, String],
    href: String,
    text: String,
    type: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    blank: {
      type: Boolean,
      default: false,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
@import "BaseButton.css";
</style>
