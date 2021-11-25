<template>
	<div class="categories">
		<ord-category
			v-for="(category, index) in categories"
			:category="category"
			:key="index"
			@click="filterByCategory(category.code)"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import OrdCategory from "@/components/molecules/OrdCategory";
import { Category } from "@/typing/interface";
import {
	faCoffee,
	faBacon,
	faUtensils,
	faDrumstickBite,
	faIceCream,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useStore } from "vuex";

export default defineComponent({
	name: "OrdCategories",
	components: {
		OrdCategory,
	},
	setup() {
		const store = useStore();

		const filterByCategory = (category: string) => {
			store.commit("filterByCategory", category);
		};

		const categories = ref<Category[]>([
			{
				name: "Todos",
				code: "todos",
				iconName: faBars,
				iconColor: "#35393D",
			},
			{
				name: "Bebidas",
				code: "bebidas",
				iconName: faCoffee,
				iconColor: "#0097e6",
			},
			{
				name: "Desayunos",
				code: "desayuno",
				iconName: faBacon,
				iconColor: "#c23616",
			},
			{
				name: "Almuerzo",
				code: "almuerzo",
				iconName: faDrumstickBite,
				iconColor: "#273c75",
			},
			{
				name: "Cena",
				code: "cena",
				iconName: faUtensils,
				iconColor: "#44bd32",
			},
			{
				name: "Aperitivos",
				code: "aperitivo",
				iconName: faIceCream,
				iconColor: "#ff9ff3",
			},
		]);
		return {
			categories,
			filterByCategory,
		};
	},
});
</script>

<style lang="scss">
@import "./categories.scss";
</style>
