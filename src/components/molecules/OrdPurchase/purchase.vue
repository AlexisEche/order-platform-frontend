<template>
  <div class="purchase">
    <img class="purchase--image" :src="purchase.image" alt="" />
    <div>
      <p class="purchase--title">{{ purchase.name }}</p>
      <p class="purchase--amount">x{{ purchase.amount }}</p>
    </div>
    <p class="purchase--price">S/{{ purchase.price * purchase.amount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import healthly from "@/assets/healthly.png";

interface Purchase {
  image: string;
  title: string;
  amount: number;
  price: number;
}

export default defineComponent({
  name: "OrdPurchase",
  props: {
    purchase: {
      type: Object as () => Purchase,
      required: false,
    },
  },
  setup() {
    return {
      healthly,
    };
  },
});
</script>

<style lang="scss">
@import "./purchase.scss";
</style>
