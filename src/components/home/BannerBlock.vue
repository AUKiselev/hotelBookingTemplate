<template>
  <section
    class="banner-block__wrapper"
    :style="
      props.background
        ? { background: `url(${props.background}) no-repeat center/100%` }
        : { background: `#EFF0F2` }
    "
  >
    <h3 class="banner-block__title">{{ props.title }}</h3>
    <p class="banner-block__description">
      {{ props.description }}
    </p>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  background: String,
});
</script>

<style lang="sass" scoped>
.banner-block__wrapper
  padding: 70px 55px
  min-height: 395px

  border-radius: 12px

.banner-block__title
  max-width: 330px

  color: $main-text-color
  font-size: $fz38
  line-height: 52px
  font-weight: 700

.banner-block__description
  color: $elements-background-color
  font-size: $fz16
  line-height: 52px
  font-weight: 500
</style>
