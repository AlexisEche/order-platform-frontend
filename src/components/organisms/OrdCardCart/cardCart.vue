<template>
	<div class="cardCart">
		<img class="cardCart--image" :src="food.image" alt="" />
		<div class="cardCart--containerDescription">
			<font-awesome-icon
				@click="deletePurchase(food.pk)"
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
import { defineComponent, ref } from "vue";
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
			pk: props.food?.pk,
		});

		const addCountProduct = (food: Food) => {
			store.dispatch("addCountProduct", food);
		};

		const decrementCountProduct = (food: Food) => {
			store.dispatch("decrementCountProduct", food);
		};

		const deletePurchase = (pk: number) => {
			store.commit("deletePurchase", pk);
		};

		return {
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
