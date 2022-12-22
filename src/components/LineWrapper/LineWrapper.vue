<template>
  <div :class="['line-wrapper', data.modify]">
    <div v-if="data.icon" class="line-wrapper__icon">
      <SvgIcon :name="data.icon" />
    </div>

    <div v-if="data.message" class="line-wrapper__title">
      {{ data.message }}
    </div>

    <div v-if="data.callback" class="line-wrapper__action">
      <BaseButton text="Label mob" @click="data.callback" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ItemInterface } from "@/Interfaces/Interfaces";
import BaseButton from "@/components/BaseButton/BaseButton.vue";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

export default defineComponent({
  name: "LineWrapper",

  props: {
    data: {
      type: Object as PropType<ItemInterface>,
      default: () => ({}),
      validator: (item: ItemInterface) => !!item.message,
    },
  },

  components: {
    BaseButton,
    SvgIcon,
  },
});
</script>

<style scoped>
@import "LineWrapper.css";
</style>
