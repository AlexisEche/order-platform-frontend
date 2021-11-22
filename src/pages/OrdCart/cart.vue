<template>
	<div class="cart">
		<div class="cart--cards">
			<ord-card-cart
				v-for="(food, index) in foodList"
				:key="index"
				:food="food"
			/>
		</div>
		<div class="cart--purchases">
			<ord-purchases />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import water from "@/assets/water.png";
import { Food } from "@/typing/interface";
import OrdCardCart from "@/components/organisms/OrdCardCart";
import OrdPurchases from "@/components/organisms/OrdPurchases";

export default defineComponent({
	name: "OrdCart",
	components: { OrdCardCart, OrdPurchases },
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
		return { water, foodList };
	},
});
</script>
<style lang="scss" scoped>
@import "./cart.scss";
</style>
