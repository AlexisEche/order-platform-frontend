<template>
	<div class="home">
		<ord-banner />
		<ord-loading class="loading" v-if="isLoading" />
		<div v-else>
			<ord-categories />
			<div class="home--containerCards">
				<ord-card v-for="(food, index) in foodList" :key="index" :food="food" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onMounted, watch } from "vue";
import OrdBanner from "@/components/organisms/OrdBanner";
import OrdCategories from "@/components/organisms/OrdCategories";
import OrdCard from "@/components/organisms/OrdCard";
import OrdModal from "@/components/organisms/OrdModal";
import OrdLoading from "@/components/atoms/OrdLoading";
import { Food } from "@/typing/interface";
import water from "@/assets/water.png";
import wine from "@/assets/wine.png";
import wine1 from "@/assets/wine1.png";
import { useRouter } from "vue-router";

import { useStore } from "vuex";
// import { useStore } from "@/store/order";

export default defineComponent({
	name: "OrdHome",
	components: {
		OrdBanner,
		OrdCategories,
		OrdCard,
		OrdLoading,
	},
	setup() {
		const store = useStore();
		const isLoading = ref(true);

		const count = computed(() => store.state.order.count);
		const title = computed(() => store.state.order.title);
		const purchases = computed(() => store.state.order.purchases);

		const increase = () => {
			store.commit("increment", 1);
		};

		const increase1 = () => {
			store.dispatch("increment");
		};

		const foodList = ref(computed(() => store.state.order.orderListFiltered));
		const foodList1 = ref(computed(() => store.state.order.orderListFiltered));

		// watch(
		// 	() => foodList,
		// 	() => {
		// 		isLoading.value = false;
		// 	}
		// );

		onMounted(async () => {
			await store.dispatch("recipes").then(() => (isLoading.value = false));
		});

		const showModal = ref(false);
		return {
			foodList,
			showModal,
			count,
			title,
			increase,
			increase1,
			purchases,
			isLoading,
			foodList1,
		};
	},
});
</script>
<style lang="scss" scoped>
@import "./home.scss";
</style>
