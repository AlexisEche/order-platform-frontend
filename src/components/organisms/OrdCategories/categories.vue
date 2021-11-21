<template>
	<div class="categories">
		<ord-category
			v-for="(category, index) in categories"
			:category="category"
			:key="index"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import healthly from "@/assets/healthly.png";
import OrdCategory from "@/components/molecules/OrdCategory";
import { Category } from "@/typing/interface";
import {
	faCoffee,
	faBacon,
	faUtensils,
	faDrumstickBite,
	faIceCream,
} from "@fortawesome/free-solid-svg-icons";

export default defineComponent({
	name: "OrdCategories",
	components: {
		OrdCategory,
	},
	setup() {
		const categories = ref<Category[]>([
			{
				name: "Bebidas",
				iconName: faCoffee,
				iconColor: "#0097e6",
			},
			{
				name: "Desayunos",
				iconName: faBacon,
				iconColor: "#c23616",
			},
			{
				name: "Almuerzo",
				iconName: faDrumstickBite,
				iconColor: "#273c75",
			},
			{
				name: "Cena",
				iconName: faUtensils,
				iconColor: "#44bd32",
			},
			{
				name: "Aperitivos",
				iconName: faIceCream,
				iconColor: "#ff9ff3",
			},
		]);
		return {
			healthly,
			categories,
		};
	},
});
</script>

<style lang="scss">
@import "./categories.scss";
</style>
