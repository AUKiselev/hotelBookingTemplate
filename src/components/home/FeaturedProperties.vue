<template>
  <section class="featured-properties__wrapper">
    <h3 class="featured-properties__title home-page-block__title">
      Featured Properties on our Listing
    </h3>
    <el-divider class="home-page-block__separatop" />
    <div class="featured-properties__content">
      <FeaturedItem
        v-for="item in featuredItems"
        :key="item._id"
        :selectedItem="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import FeaturedItem from "@/components/home/FeaturedItem.vue";
import { useHotelCards } from "@/stores/hotelCards";
import { storeToRefs } from "pinia";

const hotelCardsStore = useHotelCards();
const { featuredItems } = storeToRefs(hotelCardsStore);

onMounted(() => {
  hotelCardsStore.setFeaturedItems();
});
</script>

<style lang="sass" scoped>
.featured-properties__title
  max-width: 415px

.featured-properties__content
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  row-gap: 50px
</style>
