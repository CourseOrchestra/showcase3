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
import imgUrl from "../assets/logo-curs.png";
const getImageUrl = () => {
  return new URL(imgUrl, import.meta.url).href;
};
</script>
