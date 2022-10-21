<template>
  <a
    style="display: block; width: 200px"
    href="http://www.curs.ru"
    target="_blank"
  >
    <vImg :src="getImageUrl()" />
  </a>
</template>

<script setup lang="ts">
const getImageUrl = () => {
  return new URL(`../assets/logo-curs.png`, import.meta.url).href;
};
</script>
