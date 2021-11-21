<template>
	<div class="category">
		<button class="category--button" type="button">Categoria</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import healthly from "@/assets/healthly.png";

export default defineComponent({
	name: "OrdCategory",
	setup() {
		return {
			healthly,
		};
	},
});
</script>

<style lang="scss">
@import "./category.scss";
</style>
