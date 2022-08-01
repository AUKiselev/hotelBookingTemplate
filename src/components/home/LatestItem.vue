<template>
  <div class="latest-item__wrapper">
    <el-button
      class="latest-item__bookmark-button"
      :class="{
        'latest-item__bookmark-button--is-favorite': isFavorite,
      }"
    >
      <el-icon :size="26">
        <i-booking-bookmark-button />
      </el-icon>
    </el-button>
    <div class="latest-item__miniature"></div>
    <router-link class="latest-item__title" to="#"
      >Well Furnished Apartment</router-link
    >
    <p class="latest-item__address">100 Smart Street, LA, USA</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
// defineProps({
//   selectedItem: Object,
// });

const isFavorite = computed(() => {
  return false;
});
</script>

<style lang="sass" scoped>
.latest-item__wrapper
  padding: 20px
  min-height: 340px
  max-width: 280px
  display: flex
  flex-direction: column
  justify-content: flex-start

  background-color: $buttons-background
  border-radius: 8px

.latest-item__bookmark-button
  margin: 0 0 auto 0
  padding: 0
  width: 26px
  height: 26px
  align-self: end

  color: $buttons-background
  background-color: $buttons-background

  border: none

  &:hover
    opacity: 0.7

  &--is-favorite
    opacity: 1
    color: $elements-background-color

.latest-item__miniature
  width: 70px
  height: 70px
  justify-self: flex-end
  background-color: $miniature-background
  border-radius: 50px

.latest-item__title
  color: $main-text-color
  font-size: $fz17
  line-height: 48px
  font-weight: 700
  text-decoration: none

  transition: .3s

  &:hover, &:focus
    color: $black

    text-decoration: underline

.latest-item__address
  color: $elements-background-color
  font-size: $fz13
  line-height: 15.85px
  font-weight: 500
  text-decoration: none
</style>
