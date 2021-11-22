<template>
	<div class="cardCart">
		<img class="cardCart--image" :src="food.image" alt="" />
		<div class="cardCart--containerDescription">
			<font-awesome-icon
				@click="deletePurchase(food.id)"
				class="cardCart--trash"
				:icon="faTrash"
			/>
			<p class="cardCart--name">{{ food.name }}</p>
			<p class="cardCart--description">{{ food.description }}</p>
			<p class="cardCart--price">$/. {{ food.price }}</p>
			<div class="cardCart--buy">
				<button class="cardCart--delete" @click="decrementCountProduct(food)">
					-
				</button>
				<p class="cardCart--count">{{ food.amount }}</p>
				<button class="cardCart--add" @click="addCountProduct(food)">+</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import logo from "@/assets/manzana-roja.svg";
import { Food } from "@/typing/interface";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "vuex";

export default defineComponent({
	name: "OrdCardCart",
	props: {
		food: {
			type: Object as () => Food,
			required: false,
		},
	},
	setup(props) {
		const store = useStore();
		const count = ref(1);
		const amountToDelete = ref({
			amount: props.food?.amount,
			id: props.food?.id,
		});

		// const amountByProduct = ref(
		// 	computed(() => {
		// 		return amountToDelete.value = {
		// 			amount: props.food?.amount,
		// 			id: props.food?.id,
		// 		};
		// 	})
		// );

		watch(
			() => props.food,
			(value) => {
				// amountToDelete.value = value;
				console.log(value);
			}
		);

		const addCountProduct = (food: Food) => {
			store.dispatch("addCountProduct", food);
		};

		const decrementCountProduct = (food: Food) => {
			store.dispatch("decrementCountProduct", food);
		};

		const deletePurchase = (id: number) => {
			store.commit("deletePurchase", id);
		};

		return {
			logo,
			faTrash,
			deletePurchase,
			count,
			addCountProduct,
			decrementCountProduct,
			// amountByProduct,
			amountToDelete,
		};
	},
});
</script>

<style lang="scss">
@import "./cardCart.scss";
</style>
