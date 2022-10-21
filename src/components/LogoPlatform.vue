<template>
  <a
    style="display: block; width: 300px"
    href="https://corchestra.ru"
    target="_blank"
  >
    <vImg :src="getImageUrl()" />
  </a>
</template>

<script setup lang="ts">
const getImageUrl = () => {
  return new URL(`../assets/logo-platform.svg`, import.meta.url).href;
};
</script>
