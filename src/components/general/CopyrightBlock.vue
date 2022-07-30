<template>
  <section class="copyright">
    <span class="copyright-text"
      >© 2022
      <a
        class="copyright-link"
        href="https://thecreation.design/"
        target="_blank"
        >thecreation.design</a
      >
      | All rights raserved</span
    >
    <span class="copyright-text"
      >Created with love by
      <a
        class="copyright-link"
        href="https://thecreation.design/"
        target="_blank"
        >thecreation.design</a
      ></span
    >
  </section>
</template>

<style lang="sass" scoped>
.copyright
  padding: 40px 80px
  display: flex
  justify-content: space-between

  color: $main-text-color
  font-size: $fz16
  line-height: 20px
  font-weight: 700

  border-top: 1px solid $buttons-background

.copyright-link
  color: $main-text-color

  text-decoration: none
  transition: .3s

  &:hover, &:focus
    color: $black

    text-decoration: underline
</style>
