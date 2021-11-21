<template>
	<div class="card">
		<img class="card--image" :src="food.image" alt="" />
		<p class="card--name">{{ food.name }}</p>
		<p class="card--description">{{ food.description }}</p>
		<div class="card--buy">
			<p class="card--price">$/. {{ food.price }}</p>
			<button class="card--add">+</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/manzana-roja.svg";
import { Food } from "@/typing/interface";

export default defineComponent({
	name: "OrdCard",
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
@import "./card.scss";
</style>
