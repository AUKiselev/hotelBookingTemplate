<template>
  <NewsletterBlock />
  <div class="main-footer__wrapper">
    <section class="main-footer__links">
      <div class="main-footer__sources-links">
        <a class="main-footer__logo" href="#">LOGO</a>
        <p class="main-footer__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="main-footer__mobile-links">
          <a
            class="mobile-link mobile-link--play-store"
            href="https://play.google.com/"
            target="_blank"
            >PlayStore</a
          >
          <a
            class="mobile-link mobile-link--app-store"
            href="https://www.apple.com/ru/app-store/"
            target="_blank"
            >AppleStore</a
          >
        </div>
      </div>
      <div class="main-footer__links-block">
        <p class="links-block__title">Company</p>
        <a class="links-block__link" href="#">About Us</a>
        <a class="links-block__link" href="#">Legal Information</a>
        <a class="links-block__link" href="#">Contact Us</a>
        <a class="links-block__link" href="#">Blogs</a>
      </div>
      <div class="main-footer__links-block">
        <p class="links-block__title">Help center</p>
        <a class="links-block__link" href="#">Find a Property</a>
        <a class="links-block__link" href="#">How To Host?</a>
        <a class="links-block__link" href="#">Why Us?</a>
        <a class="links-block__link" href="#">FAQs</a>
        <a class="links-block__link" href="#">Rental Guides</a>
      </div>
      <div class="main-footer__links-block">
        <p class="links-block__title">Contact info</p>
        <a class="links-block__link" href="tel:+1234567890"
          >Phone: 1234567890</a
        >
        <a class="links-block__link" href="mailto:company@email.com"
          >Email: company@email.com</a
        >
        <a class="links-block__link" href="#"
          >Location: 100 Smart Street, LA, USA</a
        >
        <div class="main-footer__social-links">
          <a class="social-link" href="https://facebook.com/" target="_blank">
            <el-icon :size="24">
              <i-booking-facebook-icon />
            </el-icon>
          </a>
          <a class="social-link" href="https://twitter.com/" target="_blank">
            <el-icon :size="24">
              <i-booking-twitter-icon />
            </el-icon>
          </a>
          <a
            class="social-link"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <el-icon :size="24">
              <i-booking-instagram-icon />
            </el-icon>
          </a>
          <a
            class="social-link"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <el-icon :size="24">
              <i-booking-linkedin-icon />
            </el-icon>
          </a>
        </div>
      </div>
    </section>

    <CopyrightBlock />
  </div>
</template>

<script setup lang="ts">
import NewsletterBlock from "@/components/general/NewsletterBlock.vue";
import CopyrightBlock from "@/components/general/CopyrightBlock.vue";
</script>

<style lang="sass">
.main-footer__wrapper
  background-color: $additional-backgroud-color

  border-radius: 0 0 20px 20px

.main-footer__links
  padding: 85px 80px 200px
  display: flex
  justify-content: space-between

.main-footer__sources-links
  max-width: 380px
  display: flex
  flex-direction: column
  row-gap: 30px

.main-footer__logo
  width: fit-content
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

  &:active
    color: $elements-background-color
    background-color: $buttons-background
    outline: 1px solid $elements-background-color

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
  margin-top: 10px

.main-footer__social-links
  margin-top: 30px
  display: flex
  column-gap: 25px

.social-link
  color: $main-text-color
  transition: .2s

  &:hover
    color: $elements-background-color

  &:active
    color: $black
</style>
