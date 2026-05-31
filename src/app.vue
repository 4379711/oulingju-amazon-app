<script setup lang="ts">

</script>

<template>
  <router-view/>
</template>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}

/*去掉聚焦轮廓*/
.el-tooltip__trigger {
  outline: none;
}
</style>