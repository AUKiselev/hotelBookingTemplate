<template>
  <section class="result-item__wrapper">
    <div class="result-item__carousel-wrapper">
      <el-carousel class="result-item__carousel" :autoplay="false">
        <el-carousel-item
          class="result-item__carousel-item"
          v-for="image in props.selectedItem.images"
          :key="image"
          :style="{
            background: `url(${image}) no-repeat center/100% 100%`,
          }"
        ></el-carousel-item>
      </el-carousel>
      <el-button
        class="bookmark-button result-item__bookmark-button"
        :class="{
          'bookmark-button--is-favorite': isFavorite,
        }"
        @click.stop="changeIsFavorite"
      >
        <el-icon :size="26">
          <i-booking-bookmark-button />
        </el-icon>
      </el-button>

      <div class="result-item__author">
        <router-link
          class="latest-item__miniature"
          to="#"
          :style="{
            background: `url(${props.selectedItem.author.avatar}) no-repeat center/100% 100%`,
          }"
        ></router-link>
        <div class="result-item__author-info">
          <p class="result-item__author-listed-by">Listed By:</p>
          <p class="result-item__author-name">
            {{ props.selectedItem.author.name || "Static Name" }}
          </p>
          <p class="result-item__author-price">
            {{ `For: ${props.selectedItem.price.join(" - ")}` }}
          </p>
        </div>
      </div>
    </div>

    <div class="result-item__about">
      <router-link class="result-item__title" to="#">{{
        props.selectedItem.name
      }}</router-link>
      <p class="result-item__address">{{ props.selectedItem.address }}</p>

      <div class="result-item__conditions">
        <div class="result-item__bed-counter">
          <el-icon :size="23">
            <i-booking-bed />
          </el-icon>
          <span class="result-item__bed-nums">{{
            props.selectedItem.info[0].bedroom
          }}</span>
        </div>
        <div class="result-item__bathroom-counter">
          <el-icon :size="23">
            <i-booking-bathroom />
          </el-icon>
          <span class="result-item__bathroom-nums">{{
            props.selectedItem.info[0].bathroom
          }}</span>
        </div>
      </div>

      <div class="result-item__type-period">
        <p class="result-item__type">{{ props.selectedItem.type[0] }}</p>
        <el-divider class="result-item__separator" direction="vertical" />
        <p class="result-item__period">{{ fullStringPeriodTime }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { IHotelCard } from "@/models/hotelCard";

interface Props {
  selectedItem: IHotelCard;
}
const props = defineProps<Props>();
const periodTime = ref(props.selectedItem.period[0]);

const isFavorite = ref(false);
const changeIsFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const fullStringPeriodTime = computed(() => {
  const splitedPeriodTime = periodTime.value.split(" ");

  return splitedPeriodTime[splitedPeriodTime.length - 1] === "month"
    ? `For Short Period: ${periodTime.value}`
    : `For Long Period: ${periodTime.value}`;
});
</script>

<style lang="sass">
.result-item__wrapper
  max-width: 575px

  border-radius: 16px
  box-shadow: 0px 0px 10px $shadow-color
  transition: .3s

  &:hover
    background-color: $gray-background-color
    cursor: pointer

.result-item__carousel-wrapper
  position: relative
  max-height: 340px
  transition: .3s

  &:hover
    cursor: pointer

.result-item__carousel
  border-radius: 16px 16px 0 0

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

.result-item__bookmark-button
  position: absolute
  top: 25px
  right: 25px

.result-item__author
  position: absolute
  left: 25px
  bottom: 30px
  display: flex
  align-items: center
  column-gap: 20px

  & .latest-item__miniature
    width: 75px
    height: 75px
    background-color: $miniature-background
    border-radius: 50px
    transition: .2s

    &:hover
      border: 3px solid $black

.result-item__author-info
  & .result-item__author-listed-by
    color: $main-text-color
    font-size: $fz12
    line-height: 14.63px
    font-weight: 500

  & .result-item__author-name
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

  & .result-item__author-price
    color: $main-text-color
    font-size: $fz16
    line-height: 19.5px
    font-weight: 500

.result-item__about
  padding: 30px 25px 15px
  display: flex
  flex-direction: column

  & .result-item__title
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

  & .result-item__address
    margin-bottom: 20px
    color: $elements-background-color
    font-size: $fz14
    line-height: 17.07px
    font-weight: 500

  & .result-item__conditions
    margin-bottom: 20px
    display: flex
    column-gap: 15px

  & .result-item__bed-counter,
  & .result-item__bathroom-counter
    display: flex
    align-items: center
    column-gap: 10px

  & .result-item__bed-nums,
  & .result-item__bathroom-nums
    color: $main-text-color
    font-size: $fz16
    line-height: 19.5px
    font-weight: 600

  & .result-item__type-period
    display: flex

    color: $elements-background-color
    font-size: $fz14
    line-height: 17.07px
    font-weight: 600

    & .result-item__separator
      font-size: $fz20
      line-height: 20px
      margin: 0 15px
</style>
