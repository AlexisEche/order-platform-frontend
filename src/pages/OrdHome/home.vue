<template>
	<div class="home">
		<ord-banner />
		<ord-categories />
		<div class="home--containerCards">
			<ord-card v-for="(food, index) in foodList" :key="index" :food="food" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import OrdBanner from "@/components/organisms/OrdBanner";
import OrdCategories from "@/components/organisms/OrdCategories";
import OrdCard from "@/components/organisms/OrdCard";
import { Food } from "@/typing/interface";
import water from "@/assets/water.png";

export default defineComponent({
	name: "OrdHome",
	components: {
		OrdBanner,
		OrdCategories,
		OrdCard,
	},
	setup() {
		const foodList = ref<Food[]>([
			{
				name: "Water",
				description: "First drink",
				isSelected: true,
				price: 1,
				image: water,
			},
		]);

		return { foodList };
	},
});
</script>
<style lang="scss" scoped>
@import "./home.scss";
</style>
