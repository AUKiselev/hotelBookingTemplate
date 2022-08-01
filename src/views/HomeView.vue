<template>
  <SearchBlock />
  <div class="home-view__content">
    <LatestList />
  </div>
</template>

<script setup lang="ts">
import SearchBlock from "@/components/home/SearchBlock.vue";
import LatestList from "@/components/home/LatestList.vue";
</script>

<style lang="sass" scoped>
.home-view__content
  padding: 80px 80px 45px
</style>
