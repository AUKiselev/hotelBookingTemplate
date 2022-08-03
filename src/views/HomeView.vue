<template>
  <SearchBlock />
  <div class="home-view__content">
    <LatestList />
    <BannerBlock
      :title="banners.second?.title || `Static Description`"
      :description="banners.second?.description || `Static Description`"
      :background="banners.second?.image || ``"
    />
    <FeaturedProperties />
    <BannerBlock
      :title="banners.last?.title || `Static Description`"
      :description="banners.last?.description || `Static Description`"
      :background="banners.last?.image || ``"
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
import { storeToRefs } from "pinia";

const bannersStore = useBannersStore();
const { banners } = storeToRefs(bannersStore);

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
