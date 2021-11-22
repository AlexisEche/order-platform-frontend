<template>
	<div class="purchases">
		<p class="purchases--title">Resume</p>
		<ord-purchase
			v-for="(purchase, index) in purchases"
			:key="index"
			:purchase="purchase"
		/>
		<p v-if="totalPrice != 0" class="purchases--price">
			Total Price S/.{{ totalPrice }}
		</p>
		<div v-else class="purchases--subtitle">
			<p>
				Nothing yet,
				<span class="purchases--goToHome" @click="goToHome"> go home </span>
			</p>
		</div>

		<button class="purchases--confirmButton">Confirm</button>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import healthly from "@/assets/healthly.png";
import OrdPurchase from "@/components/molecules/OrdPurchase";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

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
		const router = useRouter();
		const store = useStore();
		const purchases = ref(computed(() => store.state.order.purchases));
		const totalPrice = ref(
			computed(() => store.state.order.totalPricePurchases)
		);

		const goToHome = () => {
			router.push({ name: "Home" });
		};

		return {
			healthly,
			purchases,
			totalPrice,
			goToHome,
		};
	},
});
</script>

<style lang="scss">
@import "./purchases.scss";
</style>
