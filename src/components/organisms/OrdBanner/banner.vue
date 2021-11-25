<template>
  <div class="banner">
    <img class="banner--image" :src="healthly" alt="logo" />
    <div class="banner--description">
      <p class="banner--description__title">Disfruta saludablemente</p>
      <p class="banner--description__subtitle">
        Lo mejor de nuestra gastronomía
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import healthly from "@/assets/healthly.png";

export default defineComponent({
  name: "OrdBanner",
  setup() {
    return {
      healthly,
    };
  },
});
</script>

<style lang="scss">
@import "./banner.scss";
</style>
