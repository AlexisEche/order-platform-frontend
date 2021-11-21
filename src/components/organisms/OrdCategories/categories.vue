<template>
	<div class="categories">
		<ord-category v-for="(n, index) in 5" :key="index" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import healthly from "@/assets/healthly.png";
import OrdCategory from "@/components/molecules/OrdCategory";

export default defineComponent({
	name: "OrdCategories",
	components: {
		OrdCategory,
	},
	setup() {
		return {
			healthly,
		};
	},
});
</script>

<style lang="scss">
@import "./categories.scss";
</style>
