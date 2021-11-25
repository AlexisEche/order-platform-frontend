<template>
  <div class="registration">
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
@import url("./registration.scss");
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrdRegistrationLayout",
});
</script>
