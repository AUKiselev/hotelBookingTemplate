<template>
  <SearchBlock />
  <div class="home-view__content">
    <LatestList />
    <BannerBlock
      :title="
        bannersStore.banners.second ? bannersStore.banners.second.title : ``
      "
      :description="
        bannersStore.banners.second
          ? bannersStore.banners.second.description
          : ``
      "
      :background="
        bannersStore.banners.second ? bannersStore.banners.second.image : ``
      "
    />
    <FeaturedProperties />
    <BannerBlock
      :title="bannersStore.banners.last ? bannersStore.banners.last.title : ``"
      :description="
        bannersStore.banners.last ? bannersStore.banners.last.description : ``
      "
      :background="
        bannersStore.banners.last ? bannersStore.banners.last.image : ``
      "
    />
  </div>
</template>

<script setup lang="ts">
import SearchBlock from "@/components/home/SearchBlock.vue";
import LatestList from "@/components/home/LatestList.vue";
import BannerBlock from "@/components/home/BannerBlock.vue";
import FeaturedProperties from "@/components/home/FeaturedProperties.vue";
import { useBannersStore } from "@/stores/banners";
import { onMounted } from "vue";

const bannersStore = useBannersStore();

onMounted(() => {
  bannersStore.setBanners();
});
</script>

<style lang="sass" scoped>
.home-view__content
  padding: 80px 80px 45px
  display: flex
  flex-direction: column
  row-gap: 30px
</style>
