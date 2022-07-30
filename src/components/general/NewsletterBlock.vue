<template>
  <div class="newsletter__wrapper">
    <div class="newsletter__text">
      <p class="newsletter__title">Newsletter</p>
      <p class="newsletter__description">Stay Upto Date</p>
    </div>

    <div class="newsletter__subscribe">
      <el-input
        class="newsletter__subscribe-input"
        v-model="emailForSubscribe"
        type="email"
        placeholder="Your Email..."
      />
      <el-button class="newsletter__subscribe-submit" circle>
        <el-icon :size="26">
          <i-booking-send-icon />
        </el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emailForSubscribe = ref("");
</script>

<style lang="sass">
.newsletter__wrapper
  padding: 30px 180px
  height: 115px
  display: flex
  column-gap: 65px

  background-color: $gray-background-color

.newsletter__text
  height: 50px
  display: flex
  flex-direction: column
  justify-content: space-between

.newsletter__title
  color: $main-text-color
  font-size: $fz18
  line-height: 20px
  font-weight: 700
  text-transform: uppercase

.newsletter__description
  color: $main-text-color
  font-size: $fz14
  line-height: 20px
  font-weight: 500

.newsletter__subscribe
  width: 100%
  position: relative

.newsletter__subscribe-input
  height: 50px

.newsletter__subscribe-input .el-input__wrapper
  padding: 0 25px
  border-radius: 25px

.newsletter__subscribe-input .is-focus
  box-shadow: 0 0 0 1px $elements-hover-background-color inset

.newsletter__subscribe-submit
  height: 50px
  width: 50px
  position: absolute
  top: 0
  right: 0
  color: $white

  background-color: $elements-background-color

  & span
    margin-left: 4px

  &:hover, &:focus, &:focus-visible
    color: $buttons-background
    background-color: $elements-hover-background-color
    border: none
    outline: none

  &:active
    color: $elements-hover-background-color
    background-color: $elements-background-color
    border: 1px solid $elements-hover-background-color
</style>
