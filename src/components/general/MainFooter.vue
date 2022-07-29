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

  <div class="main-footer__wrapper">
    <section class="main-footer__links">
      <div class="main-footer__sources-links">
        <a class="main-footer__logo" href="#">LOGO</a>
        <p class="main-footer__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="main-footer__mobile-links">
          <a class="mobile-link mobile-link--play-store" href="#">PlayStore</a>
          <a class="mobile-link mobile-link--app-store" href="#">AppleStore</a>
        </div>
      </div>
      <div class="main-footer__links-block">
        <p class="links-block__title">Company</p>
        <a href="#" class="links-block__link">About Us</a>
        <a href="#" class="links-block__link">Legal Information</a>
        <a href="#" class="links-block__link">Contact Us</a>
        <a href="#" class="links-block__link">Blogs</a>
      </div>
      <div class="main-footer__links-block">
        <p class="links-block__title">Help center</p>
        <a href="#" class="links-block__link">Find a Property</a>
        <a href="#" class="links-block__link">How To Host?</a>
        <a href="#" class="links-block__link">Why Us?</a>
        <a href="#" class="links-block__link">FAQs</a>
        <a href="#" class="links-block__link">Rental Guides</a>
      </div>
      <div class="main-footer__links-block">
        <p class="links-block__title">Contact info</p>
        <a href="#" class="links-block__link">Phone: 1234567890</a>
        <a href="#" class="links-block__link">Email: company@email.com</a>
        <a href="#" class="links-block__link"
          >Location: 100 Smart Street, LA, USA</a
        >
        <div class="main-footer__social-links"></div>
      </div>
    </section>
    <section class="main-footer__copyright"></section>
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

  &:hover, &:focus
    color: $buttons-background
    background-color: $elements-hover-background-color
    border: none

.main-footer__wrapper
  padding: 85px 80px 0

  background-color: $additional-backgroud-color

  border-radius: 0 0 20px 20px

.main-footer__links
  display: flex
  justify-content: space-between

.main-footer__sources-links
  max-width: 380px
  display: flex
  flex-direction: column
  row-gap: 30px

.main-footer__logo
  color: $main-text-color
  font-size: $fz50
  line-height: 60.95px
  font-weight: 800

  text-decoration: none

.main-footer__description
  color: $elements-background-color
  font-size: $fz15
  line-height: 20px
  font-weight: 400

.main-footer__mobile-links
  display: flex
  column-gap: 15px

.mobile-link
  padding: 15px 20px
  color: $main-text-color
  font-size: $fz15
  line-height: 18.29px
  font-weight: 600

  background-color: $buttons-background

  border-radius: 6px
  text-decoration: none
  transition: .2s

  &:hover, &:focus
    color: $buttons-background
    background-color: $elements-background-color

.main-footer__links-block
  display: flex
  flex-direction: column

.links-block__title
  margin-bottom: 20px

  color: $main-text-color
  font-size: $fz18
  line-height: 20px
  font-weight: 700

.links-block__link
  color: $main-text-color
  font-size: $fz15
  line-height: 20px
  font-weight: 500

  text-decoration: none
  transition: .3s

  &:hover, &:focus
    color: $black

    text-decoration: underline

.links-block__link + *
  margin-top: 5px
</style>
