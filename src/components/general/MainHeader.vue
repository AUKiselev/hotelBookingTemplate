<template>
  <div class="main-header__wrapper">
    <router-link class="main-header__logo" to="/">LOGO</router-link>

    <!-- TODO Add defaultActive -->
    <el-menu
      class="main-header__menu-list"
      mode="horizontal"
      :router="true"
      :ellipsis="false"
    >
      <el-menu-item class="main-header__menu-item">
        <template #title>
          <span>Find a Property</span>
        </template>
      </el-menu-item>
      <el-menu-item class="main-header__menu-item">
        <template #title>
          <span>Share Stories</span>
        </template>
      </el-menu-item>
      <el-menu-item class="main-header__menu-item">
        <template #title>
          <span>Rental Guides</span>
        </template>
      </el-menu-item>
      <el-menu-item class="main-header__menu-item">
        <template #title>
          <span>Download Mobile App</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="sass" scoped>
.main-header__wrapper
  padding: 0 80px
  height: 70px
  display: flex
  align-items: center

  background-color: $additional-backgroud-color

  border-radius: 20px 20px 0 0

.main-header__logo
  color: $main-text-color
  font-size: $fz35
  line-height: 42.67px
  font-weight: 800
  text-decoration: none

.main-header__menu-list
  margin-left: 133px
  column-gap: 30px
  border: none

  background-color: $additional-backgroud-color

.main-header__menu-item
  padding: 0
  color: $main-text-color
  font-size: $fz16
  line-height: 19.5px
  font-weight: 600

.main-header__menu-list .main-header__menu-item
  &:hover, &:focus
    background-color: inherit
    color: $black

    border-bottom: 2px solid $black
</style>
