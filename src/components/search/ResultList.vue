<template>
  <section class="result-list__wrapper">
    <section class="result-list__hotel-list">
      <p class="result-list__search-result-counter">
        {{ `${hotelsWithFullInfo.length} Results Found` }}
      </p>

      <section class="result-list__content">
        <ResultItem
          v-for="item in showingHotels"
          :key="item._id"
          :selectedItem="item"
        />
      </section>

      <el-button
        class="result-list__show-all-link"
        v-if="isShowAllButton"
        @click="showAllHotels"
        >Other as per found results...</el-button
      >
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ResultItem from "@/components/search/ResultItem.vue";
import { useHotelCards } from "@/stores/hotelCards";
import { storeToRefs } from "pinia";

const hotelCardsStore = useHotelCards();
const { hotelsWithFullInfo } = storeToRefs(hotelCardsStore);

const showingHotels = ref(hotelsWithFullInfo.value.slice(0, 3));
const isShowAllButton = ref(true);
const showAllHotels = () => {
  isShowAllButton.value = !isShowAllButton.value;
  showingHotels.value = hotelsWithFullInfo.value;
};
</script>

<style lang="sass" scoped>
.result-list__hotel-list
  padding: 0 0 70px 80px

  & .result-list__search-result-counter
    padding: 95px 0

    color: $main-text-color
    font-size: $fz24
    line-height: 29.26px
    font-weight: 700

  & .result-list__content
    display: flex
    flex-direction: column
    row-gap: 80px

  & .result-list__show-all-link
    margin: 200px 0 0
    padding: 0

    width: fit-content
    color: $main-text-color
    font-size: $fz16
    line-height: 19.5px
    font-weight: 700

    transition: .3s
    border: none

    &:hover, &:focus
      background-color: inherit
      color: $black

      text-decoration: underline
</style>
