<script setup lang="ts">
import {getAmazonAssetsFile} from "@/utils/common";

</script>
<template>
  <el-menu
      :router="true"
      :default-active="$route.name"
      class="header-menu"
      mode="horizontal"
      :ellipsis="false">
    <img class="header-logo"
         :src="getAmazonAssetsFile('logo.png')"
         alt="logo"/>
    <el-menu-item index="home" :route='{name:"amazon-home"}'>Home</el-menu-item>
    <el-sub-menu index="product">
      <template #title>Product</template>
      <el-menu-item index="financial" :route='{name:"amazon-product-financial"}'>Detailed financial management</el-menu-item>
      <el-menu-item index="supply-chain" :route='{name:"amazon-product-supply-chain"}'>Efficient supply Chain management</el-menu-item>
      <el-menu-item index="operations" :route='{name:"amazon-product-operations"}'>Operations management efficiency</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="solution" :route='{name:"amazon-solution"}'>Solution</el-menu-item>
    <el-menu-item index="about" :route='{name:"amazon-about"}'>About</el-menu-item>
  </el-menu>
</template>

<style>

.header-menu{
  justify-content: center; /* 水平居中 */
}
</style>
