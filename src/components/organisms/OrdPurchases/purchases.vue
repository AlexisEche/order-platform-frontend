<template>
	<div class="purchases">
		<p class="purchases--title">Resume</p>
		<ord-purchase
			v-for="(purchase, index) in purchases"
			:key="index"
			:purchase="purchase"
		/>
		<button class="purchases--confirmButton">Confirm</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import healthly from "@/assets/healthly.png";
import { Category } from "@/typing/interface";
import OrdPurchase from "@/components/molecules/OrdPurchase";
import water from "@/assets/water.png";

interface Purchase {
	image: string;
	title: string;
	amount: number;
}
export default defineComponent({
	name: "OrdPurchases",
	components: {
		OrdPurchase,
	},
	props: {},
	setup() {
		const purchases = ref<Purchase[]>([
			{
				image: water,
				title: "Water",
				amount: 1,
			},
		]);

		return {
			healthly,
			purchases,
		};
	},
});
</script>

<style lang="scss">
@import "./purchases.scss";
</style>
