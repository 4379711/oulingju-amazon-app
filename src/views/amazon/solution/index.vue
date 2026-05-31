<route>
{
meta: {
title: 'solution'
}
}
</route>
<script setup lang="ts">

import {getAmazonAssetsFile} from "@/utils/common";
</script>

<template>
    <img :src="getAmazonAssetsFile('solution1.png')" alt=""/>
    <img :src="getAmazonAssetsFile('solution1.png')" alt=""/>
</template>

<style scoped>
img{
  display: block;
  margin: 0 auto;
}
</style>