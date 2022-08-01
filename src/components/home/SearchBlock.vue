<template>
  <section class="search-block__wrapper">
    <span class="search-block__background-plug">Banner</span>
    <div class="search-block__content">
      <h3 class="search-block__title">Find</h3>
      <el-form class="search-block__search-form" :model="searchForm">
        <el-form-item class="search-block__search-form-item" label="Location">
          <el-input
            v-model="searchForm.location"
            placeholder="Which city do you prefer?"
          />
        </el-form-item>
        <el-divider class="search-block__separator" direction="vertical" />
        <el-form-item
          class="search-block__search-form-item search-block__date"
          label="Check In"
        >
          <el-date-picker
            v-model="searchForm.checkIn"
            type="date"
            placeholder="Add Dates"
            prefix-icon="false"
          />
        </el-form-item>
        <el-divider class="search-block__separator" direction="vertical" />
        <el-form-item
          class="search-block__search-form-item search-block__date"
          label="Check Out"
        >
          <el-date-picker
            v-model="searchForm.checkOut"
            type="date"
            placeholder="Add Dates"
            prefix-icon="false"
          />
        </el-form-item>
        <el-divider class="search-block__separator" direction="vertical" />
        <el-form-item class="search-block__search-form-item" label="Guests">
          <el-input v-model="searchForm.guests" placeholder="Add Guests" />
        </el-form-item>
        <el-form-item class="search-block__search-form-item">
          <el-button class="search-block__search-form-submit" circle>
            <el-icon :size="20">
              <i-booking-search />
            </el-icon>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const searchForm = reactive({
  location: "",
  checkIn: "",
  checkOut: "",
  guests: "",
});
</script>

<style lang="sass">
.search-block__wrapper
  min-height: 580px
  position: relative

  background-color: $additional-backgroud-color

.search-block__background-plug
  position: absolute
  top: calc(50% - 70px)
  left: 50%
  transform: translate(-50%, -50%)

  color: $gray-background-color
  font-size: 120px
  line-height: 146.28px
  font-weight: 800
  text-transform: uppercase

.search-block__content
  min-width: 800px
  position: absolute
  bottom: 75px
  left: 50%
  transform: translateX(-50%)


.search-block__title
  margin: 0 0 30px 30px

  color: $main-text-color
  font-size: $fz40
  line-height: 48.76px
  font-weight: 700
  text-transform: uppercase

.search-block__search-form
  display: flex
  justify-content: space-between
  height: 70px
  padding: 15px 30px

  background-color: $white

  border-radius: 35px

.search-block__search-form-item
  margin: 0
  height: 100%
  flex-direction: column

  & .el-form-item__label
    padding: 0
    justify-content: flex-start
    height: auto

    color: $main-text-color
    font-size: $fz12
    line-height: 14.63px
    font-weight: 600

  & .el-input__wrapper
    padding: 0
    box-shadow: none

  & .el-input__wrapper .el-input__prefix
    display: none

.search-block__date
  max-width: 110px

.search-block__search-form-submit
  height: 54px
  width: 54px
  position: absolute
  top: -7px
  right: -22px
  color: $white

  background-color: $main-text-color

  &:hover, &:focus, &:focus-visible
    color: $buttons-background
    background-color: $elements-hover-background-color
    border: none
    outline: none

  &:active
    color: $elements-hover-background-color
    background-color: $main-text-color
    border: 1px solid $elements-hover-background-color

.search-block__separator
  height: 100%
  margin: 0 15px
</style>