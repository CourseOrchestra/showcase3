<template>
  <a
    style="display: block; width: 300px"
    href="https://corchestra.ru"
    target="_blank"
  >
    <v-img :src="require('../assets/logo-platform.svg')" />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LogoPlatform",

  data: () => ({}),
});
</script>
