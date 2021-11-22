<template>
	<div class="cart">
		<div class="cart--cards">
			<ord-card-cart
				v-for="(purchase, index) in purchases"
				:key="index"
				:food="purchase"
			/>
		</div>
		<div class="cart--purchases">
			<ord-purchases />
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import water from "@/assets/water.png";
import { Food } from "@/typing/interface";
import OrdCardCart from "@/components/organisms/OrdCardCart";
import OrdPurchases from "@/components/organisms/OrdPurchases";

import { useStore } from "vuex";
export default defineComponent({
	name: "OrdCart",
	components: { OrdCardCart, OrdPurchases },
	setup() {
		const store = useStore();
		const purchases = ref(computed(() => store.state.order.purchases));
		const foodList = ref<Food[]>([
			{
				id: 0,
				name: "Water",
				category: "drinks",
				description: "First drink",
				isSelected: true,
				price: 1,
				image: water,
				amount: 1,
			},
		]);
		return { water, foodList, purchases };
	},
});
</script>
<style lang="scss" scoped>
@import "./cart.scss";
</style>
