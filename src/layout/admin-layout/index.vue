<script setup>

</script>

<template>
</template>
<!--设置为全局样式-->
<style>
.el-aside {
  width: auto;
  border-right: 1px solid var(--el-border-color);
  padding: 0;
  margin: 0;
}

/*禁用头部和侧边栏双击选中文字*/
.el-header,.el-aside{
  -moz-user-select:none;/*火狐*/
  -webkit-user-select:none;/*webkit浏览器*/
  -ms-user-select:none;/*IE10*/
  -khtml-user-select:none;/*早期浏览器*/
  user-select:none;
}

.el-header {
  --el-header-height: 40px;
  border-bottom: 1px solid var(--el-border-color);
  font-size: 40px;
  --el-header-padding: 0;
  margin: 0;
}

.el-main {
  height: calc(100vh - 41px);
  padding: 0;
  margin: 0;
}

.el-menu {
  border-right: none !important;
}

.el-menu-item {
  font-size: 1rem;
}
</style>