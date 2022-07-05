<template>
  <a
    style="display: block; width: 200px"
    href="http://www.curs.ru"
    target="_blank"
  >
    <v-img :src="getImageUrl()" />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LogoCurs",

  setup() {
    const getImageUrl = () => {
      return new URL(`../assets/logo-curs.png`, import.meta.url).href;
    };
    return { getImageUrl };
  },

  data: () => ({}),
});
</script>
