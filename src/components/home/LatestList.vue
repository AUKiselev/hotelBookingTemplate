<template>
  <section class="latest-list__wrapper">
    <h3 class="latest-list__title">Latest on the Property Listing</h3>
    <el-divider class="latest-list__separatop" />
    <div class="latest-list__content">
      <LatestItem />
      <LatestItem />
      <LatestItem />
      <LatestItem />
    </div>
  </section>
</template>

<script setup lang="ts">
import LatestItem from "@/components/home/LatestItem.vue";
</script>

<style lang="sass" scoped>
.latest-list__title
  max-width: 340px

  color: $main-text-color
  font-size: $fz36
  line-height: 48px
  font-weight: 700

.latest-list__separatop
  margin: 24px 0 64px
  width: 140px

  border-top: 6px solid $main-text-color

.latest-list__content
  display: flex
  justify-content: space-between
</style>
