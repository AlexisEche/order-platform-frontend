<template>
	<div class="cardCart">
		<img class="cardCart--image" :src="food.image" alt="" />
		<div class="cardCart--containerDescription">
			<p class="cardCart--name">{{ food.name }}</p>
			<p class="cardCart--description">{{ food.description }}</p>
			<p class="cardCart--price">$/. {{ food.price }}</p>
			<div class="cardCart--buy">
				<button class="cardCart--delete">-</button>
				<p class="cardCart--count">0</p>
				<button class="cardCart--add">+</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import logo from "@/assets/manzana-roja.svg";
import { Food } from "@/typing/interface";

export default defineComponent({
	name: "OrdCardCart",
	props: {
		food: {
			type: Object as () => Food,
			required: false,
		},
	},
	setup() {
		return {
			logo,
		};
	},
});
</script>

<style lang="scss">
@import "./cardCart.scss";
</style>
