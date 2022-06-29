<template>
  <a
    style="display: block; width: 200px"
    href="http://www.curs.ru"
    target="_blank"
  >
    <v-img :src="require('../assets/logo-curs.png')" />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LogoCurs",

  data: () => ({}),
});
</script>
