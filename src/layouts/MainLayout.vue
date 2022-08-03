<template>
  <el-container class="main-layout__wrapper">
    <el-header class="main-layout__header" height="70px">
      <MainHeader />
    </el-header>
    <el-main class="main-layout__main-content">
      <RouterView />
    </el-main>
    <el-footer
      class="main-layout__footer"
      v-if="!(route.path === `/search`)"
      height="730px"
    >
      <MainFooter />
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import MainHeader from "@/components/general/MainHeader.vue";
import MainFooter from "@/components/general/MainFooter.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="sass" scoped>
.main-layout__header, .main-layout__main-content, .main-layout__footer
  padding: 0
</style>
