<template>
	<div class="card">
		<img
			id="show-modal"
			@click="showModal = true"
			class="card--image"
			:src="food.image"
			alt=""
		/>
		<p class="card--name">{{ food.name }}</p>
		<p class="card--description">{{ food.description }}</p>
		<div class="card--buy">
			<p class="card--price">$/. {{ food.price }}</p>
			<button class="card--add" @click="addPurchase(food)">+</button>
		</div>

		<transition name="modal">
			<ord-modal v-if="showModal" @close="showModal = false">
				<img
					id="show-modal"
					@click="showModal = true"
					class="card--image_modal"
					:src="food.image"
					alt=""
				/>
				<p class="card--name">{{ food.name }}</p>
				<p class="card--description">{{ food.description }}</p>
			</ord-modal>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Food } from "@/typing/interface";
import OrdModal from "@/components/organisms/OrdModal";
import { useStore } from "vuex";

export default defineComponent({
	name: "OrdCard",
	components: {
		OrdModal,
	},
	props: {
		food: {
			type: Object as () => Food,
			required: false,
		},
	},
	setup() {
		const showModal = ref(false);
		const store = useStore();
		const addPurchase = (food: Food) => {
			store.dispatch("addPurchase", food);
		};

		return {
			showModal,
			addPurchase,
		};
	},
});
</script>

<style lang="scss">
@import "./card.scss";
</style>
