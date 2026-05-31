<route>
{
meta: {
title: 'page not found',
layout: 'empty-layout/index'
}
}
</route>

<script setup lang="ts">

import {getSystemAssetsFile} from "@/utils/common";
</script>

<template>
  <div class="not-found">
    <img :src="getSystemAssetsFile('404.gif')" alt=""/>
  </div>
</template>

<style scoped>
.not-found {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.not-found img {
  width: 100%;
  height: 100%;
}
</style>