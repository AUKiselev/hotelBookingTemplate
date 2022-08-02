<template>
  <div
    class="latest-item__wrapper"
    :style="{
      background: `url(${props.selectedItem.image}) no-repeat center/100% 100%`,
    }"
  >
    <el-button
      class="latest-item__bookmark-button"
      :class="{
        'latest-item__bookmark-button--is-favorite': isFavorite,
      }"
      @click="changeIsFavorite"
    >
      <el-icon :size="26">
        <i-booking-bookmark-button />
      </el-icon>
    </el-button>
    <router-link
      class="latest-item__miniature"
      to="#"
      :style="{
        background: `url(${props.selectedItem.author.avatar}) no-repeat center/100% 100%`,
      }"
    ></router-link>
    <router-link class="latest-item__title" to="#">
      {{ props.selectedItem.name }}
    </router-link>
    <p class="latest-item__address">{{ props.selectedItem.address }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ILatestItem } from "@/models/latestItem";

interface Props {
  selectedItem: ILatestItem;
}
const props = defineProps<Props>();

const isFavorite = ref(false);

const changeIsFavorite = () => {
  isFavorite.value = !isFavorite.value;
};
</script>

<style lang="sass" scoped>
.latest-item__wrapper
  padding: 20px
  min-height: 340px
  width: 280px
  display: flex
  flex-direction: column
  justify-content: flex-start

  background-color: $buttons-background
  border-radius: 8px

.latest-item__bookmark-button
  padding: 0
  width: 26px
  height: 26px
  align-self: end

  color: $buttons-background
  background-color: $bookmark-background

  border: none

  &:hover
    opacity: 0.7

  &--is-favorite
    opacity: 1
    color: $elements-background-color

.latest-item__miniature
  margin-top: 124px
  width: 70px
  height: 70px
  background-color: $miniature-background
  border-radius: 50px
  transition: .2s

  &:hover
    border: 3px solid $black

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
