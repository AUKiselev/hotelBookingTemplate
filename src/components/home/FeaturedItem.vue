<template>
  <div class="featured-item__wrapper">
    <div
      class="featured-item__carousel-wrapper"
      @click="router.push({ name: `detailsView` })"
    >
      <el-carousel class="featured-item__carousel" :autoplay="false">
        <el-carousel-item
          class="featured-item__carousel-item"
          v-for="image in props.selectedItem.images"
          :key="image"
          :style="{
            background: `url(${image}) no-repeat center/100% 100%`,
          }"
        ></el-carousel-item>
      </el-carousel>
      <el-button
        class="bookmark-button featured-item__bookmark-button"
        :class="{
          'bookmark-button--is-favorite': isFavorite,
        }"
        @click.stop="changeIsFavorite"
      >
        <el-icon :size="26">
          <i-booking-bookmark-button />
        </el-icon>
      </el-button>
      <p class="featured-item__price">
        {{ `${props.selectedItem.price.join(` - `)} USD` }}
      </p>
    </div>
    <div class="featured-item__about">
      <router-link class="featured-item__title" to="#">{{
        props.selectedItem.name
      }}</router-link>
      <p class="featured-item__address">{{ props.selectedItem.address }}</p>
      <div class="featured-item__conditions">
        <div class="featured-item__bed-counter">
          <el-icon :size="23">
            <i-booking-bed />
          </el-icon>
          <span class="featured-item__bed-nums">{{
            props.selectedItem.info[0].bedroom
          }}</span>
        </div>
        <div class="featured-item__bathroom-counter">
          <el-icon :size="23">
            <i-booking-bathroom />
          </el-icon>
          <span class="featured-item__bathroom-nums">{{
            props.selectedItem.info[0].bathroom
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import type { IFeaturedItem } from "@/models/featuredItem";

interface Props {
  selectedItem: IFeaturedItem;
}
const props = defineProps<Props>();

const isFavorite = ref(false);

const changeIsFavorite = () => {
  isFavorite.value = !isFavorite.value;
};
</script>

<style lang="sass">
.featured-item__wrapper
  min-width: 380px

.featured-item__carousel-wrapper
  position: relative
  max-height: 340px
  transition: .3s

  &:hover
    cursor: pointer
    transform: scale(1.1)

.featured-item__carousel
  border-radius: 12px

  & .el-carousel__indicators
    display: flex
    column-gap: 5px
    left: auto
    right: 20px
    bottom: 25px
    transform: translateX(0)

    & .el-carousel__indicator
      padding: 0

      & .el-carousel__button
        height: 10px
        width: 10px
        border-radius: 50px

.featured-item__bookmark-button
  position: absolute
  top: 20px
  right: 20px

.featured-item__price
  position: absolute
  left: 20px
  bottom: 15px

  color: $elements-background-color
  font-size: $fz18
  line-height: 21.94px
  font-weight: 600

.featured-item__about
  margin-top: 30px
  display: flex
  flex-direction: column
  row-gap: 10px

.featured-item__title
  width: fit-content
  color: $main-text-color
  font-size: $fz18
  line-height: 21.94px
  font-weight: 700
  text-decoration: none

  transition: .3s

  &:hover, &:focus
    color: $black

    text-decoration: underline

.featured-item__address
  color: $elements-background-color
  font-size: $fz14
  line-height: 17.07px
  font-weight: 500

.featured-item__conditions
  display: flex
  column-gap: 15px

.featured-item__bed-counter,
.featured-item__bathroom-counter
  display: flex
  align-items: center
  column-gap: 10px

.featured-item__bed-nums,
.featured-item__bathroom-nums
  color: $main-text-color
  font-size: $fz16
  line-height: 19.5px
  font-weight: 600
</style>
