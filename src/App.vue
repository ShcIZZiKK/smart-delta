<template>
  <div class="app-wrapper">
    <LineWrapper v-for="item in list" :key="item.id" :data="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ItemInterface } from "@/Interfaces/Interfaces";
import LineWrapper from "@/components/LineWrapper/LineWrapper.vue";

export default defineComponent({
  name: "App",

  components: {
    LineWrapper,
  },

  setup() {
    const callback = (event: Event): void => {
      console.log(event.target as EventTarget);
    };

    const list = ref([
      {
        id: 1,
        icon: "note",
        message: "Title Big mob",
        callback,
      },
      {
        id: 2,
        message: "Title Big mob Title Big mob Title Big mob Title Big mob",
        modify: "line-wrapper_theme_warning",
      },
      {
        id: 3,
        message: "Title Big mob Title Big mob Title Big mob Title Big mob",
        modify: "line-wrapper_theme_second",
        callback,
      },
      {
        id: 4,
        icon: "clock",
        message: "Title Big mob Title Big",
        modify: "line-wrapper_theme_warning",
      },
    ] as ItemInterface[]);

    return { list };
  },
});
</script>

<style>
@import "assets/styles/app.css";
</style>
