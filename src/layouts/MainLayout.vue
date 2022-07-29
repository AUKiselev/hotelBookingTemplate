<template>
  <el-container class="main-layout__wrapper">
    <el-header class="main-layout__header" height="70px">
      <MainHeader />
    </el-header>
    <el-main>Main</el-main>
    <el-footer class="main-layout__footer" height="730px">
      <MainFooter />
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import MainHeader from "@/components/general/MainHeader.vue";
import MainFooter from "@/components/general/MainFooter.vue";
</script>

<style lang="sass" scoped>
.main-layout__header
  padding: 0

.main-layout__footer
  padding: 0
</style>
