import { State } from "../index";
import { Food } from "@/typing/interface";

import { MutationTree, ActionTree } from "vuex";

export const moduleOrder = {
	state: { count: 15, title: "mancora", purchases: [], totalPricePurchases: 0 },
	mutations: <MutationTree<State>>(<unknown>{
		increment(state: State) {
			state.count++;
		},
		updateTotalPricePurchasesLength(state: State) {
			const total = state.purchases
				.reduce((acc, purchase) => {
					return (
						(purchase.amount != undefined ? purchase.amount : 1) *
							purchase.price +
						acc
					);
				}, 0)
				.toFixed(2);
			state.totalPricePurchases = parseInt(total);
		},
		addPurchase(state: State, purchase: Food) {
			state.purchases = state.purchases.filter((value) => {
				return value.id != purchase.id;
			});

			if (!state.purchases.includes(purchase)) {
				state.purchases.push(purchase);
			}
		},
		addCountProduct(state: State, currentPurchase: Food) {
			const count = state.purchases.filter(
				(purchase) => purchase.id == currentPurchase.id
			);
			count[0].amount ? (count[0].amount = count[0].amount + 1) : 1;
		},

		decrementCountProduct(state: State, currentPurchase: Food) {
			const count = state.purchases.filter(
				(purchase) => purchase.id == currentPurchase.id
			);
			count[0].amount ? (count[0].amount = count[0].amount - 1) : 1;
		},
		deletePurchase(state: State, purchaseId: number) {
			const purchaseAmountByProduct = state.purchases.find(
				(purchase) => purchase.id === purchaseId
			);
			state.purchases = [
				...new Set(
					state.purchases.filter(
						(currentPurchase) => currentPurchase.id != purchaseId
					)
				),
			];
			state.totalPricePurchases =
				state.totalPricePurchases -
				(purchaseAmountByProduct?.amount != undefined
					? purchaseAmountByProduct?.amount
					: 1);
		},
	}),
	actions: <ActionTree<State, any>>{
		increment({ commit }) {
			commit("increment");
		},
		addPurchase({ commit }, purchase: Food) {
			commit("addPurchase", purchase);
			commit("updateTotalPricePurchasesLength");
		},
		addCountProduct({ commit }, currentPurchase: Food) {
			commit("addCountProduct", currentPurchase);
			commit("updateTotalPricePurchasesLength");
		},
		decrementCountProduct({ commit }, currentPurchase: Food) {
			if (
				currentPurchase.amount != undefined ? currentPurchase.amount > 1 : 1
			) {
				commit("decrementCountProduct", currentPurchase);
				commit("updateTotalPricePurchasesLength");
			} else {
				commit("deletePurchase", currentPurchase.id);
			}
		},
	},
};
