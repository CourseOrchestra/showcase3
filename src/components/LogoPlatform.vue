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
import imgUrl from "../assets/logo-platform.svg";
const getImageUrl = () => {
  return new URL(imgUrl, import.meta.url).href;
};
</script>
