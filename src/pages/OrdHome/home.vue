<template>
	<div class="home">
		<ord-banner />
		<ord-categories />
		<div class="home--containerCards">
			<ord-card v-for="(food, index) in foodList" :key="index" :food="food" />
		</div>
		<button id="show-modal" @click="showModal = true">Show Modal</button>
		{{ count }}{{ title }}---{{ purchases }}
		<button @click="increase1">+</button>
		<transition name="modal">
			<ord-modal v-if="showModal" @close="showModal = false"> </ord-modal>
		</transition>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import OrdBanner from "@/components/organisms/OrdBanner";
import OrdCategories from "@/components/organisms/OrdCategories";
import OrdCard from "@/components/organisms/OrdCard";
import OrdModal from "@/components/organisms/OrdModal";
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
		OrdModal,
	},
	setup() {
		const router = useRouter();
		const store = useStore();

		const count = computed(() => store.state.order.count);
		const title = computed(() => store.state.order.title);
		const purchases = computed(() => store.state.order.purchases);

		const increase = () => {
			store.commit("increment", 1);
		};

		const increase1 = () => {
			store.dispatch("increment");
		};

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
			{
				id: 1,
				name: "Wine",
				category: "breakfast",
				description: "First wine",
				isSelected: false,
				price: 1,
				image: wine,
				amount: 1,
			},
			{
				id: 2,
				name: "Wine1",
				category: "dinner",
				description: "First wine1",
				isSelected: true,
				price: 1,
				image: wine1,
				amount: 1,
			},
		]);

		const showModal = ref(false);
		return {
			foodList,
			showModal,
			count,
			title,
			increase,
			increase1,
			purchases,
		};
	},
});
</script>
<style lang="scss" scoped>
@import "./home.scss";
</style>
