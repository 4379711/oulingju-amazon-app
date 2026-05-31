<script setup lang="ts">
import Header from "@/layout/amazon-layout/header/index.vue";
import {getAmazonAssetsFile} from "@/utils/common";

let props = defineProps(['index', 'url', "title"])
</script>

<template>
  <div :class="index%2===0?'row-white-bg':'row-dark-bg'">
    <div class="pic_text_container">
      <img
          :src="getAmazonAssetsFile(props.url)"
          alt=""/>
      <div class="text_div">
        <header v-if="props.title">{{ props.title }}</header>
        <p v-if="props.title" class="text_inner">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row-white-bg {
  background: white;
  flex-direction: row-reverse;
}

.row-dark-bg {
  background: rgb(248, 249, 255);
  flex-direction: row;
}

.pic_text_container {
  /*继承上级div的动态改变图片和文字位置*/
  flex-direction: inherit;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  display: flex;
  align-items: center;
  max-width: 80em;
  padding-left: 0;
  padding-right: 0;
  border: 0;
}

img {
  width: 50rem;
}

.text_div {
  border: 0;
  width: 30rem;
}

.text_div header {
  font-size: 2.25rem;
  line-height: 3.75rem;
}

.text_inner {
  font-size: 1rem;
  line-height: 1.75rem;
}
</style>