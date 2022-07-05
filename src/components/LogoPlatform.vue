<template>
  <a
    style="display: block; width: 300px"
    href="https://corchestra.ru"
    target="_blank"
  >
    <v-img :src="getImageUrl()" />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LogoPlatform",

  setup() {
    const getImageUrl = () => {
      return new URL(`../assets/logo-platform.svg`, import.meta.url).href;
    };
    return { getImageUrl };
  },

  data: () => ({}),
});
</script>
