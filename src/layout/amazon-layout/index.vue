<script setup lang="ts">

import Header from "@/layout/amazon-layout/header/index.vue";
import Main from "@/layout/amazon-layout/main/index.vue";
import Footer from "@/layout/amazon-layout/footer/index.vue";
</script>

<template>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
</template>

<style>
/*禁用头部双击选中文字*/
.el-header {
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
}

.el-header {
  --el-header-height: 60px;
  border-bottom: 1px solid var(--el-border-color);
  font-size: 40px;
  --el-header-padding: 0;
  margin: 0;
}

.el-footer {
  height: 30px;
  padding: 0;
  margin: 0;
}

.el-main {
  height: calc(100vh - 60px - 30px);
  padding: 0;
  margin: 0;
}

.el-menu-item {
  font-size: 1rem;
}
</style>