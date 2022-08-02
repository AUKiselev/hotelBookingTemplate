<template>
  <section class="latest-list__wrapper">
    <h3 class="latest-list__title home-page-block__title">
      Latest on the Property Listing
    </h3>
    <el-divider class="home-page-block__separatop" />
    <div class="latest-list__content">
      <LatestItem
        v-for="item in latestItems"
        :key="item._id"
        :selectedItem="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import LatestItem from "@/components/home/LatestItem.vue";
import { useHotelCards } from "@/stores/hotelCards";
import { storeToRefs } from "pinia";

const hotelCardsStore = useHotelCards();
const { latestItems } = storeToRefs(hotelCardsStore);

onMounted(() => {
  hotelCardsStore.setLatestItems();
});
</script>

<style lang="sass" scoped>
.latest-list__title
  max-width: 340px

.latest-list__separatop
  margin: 24px 0 64px
  width: 140px

  border-top: 6px solid $main-text-color

.latest-list__content
  display: flex
  justify-content: space-between
</style>
