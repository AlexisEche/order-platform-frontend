import { State } from "../index";
import { Food } from "@/typing/interface";

import { MutationTree, ActionTree } from "vuex";
import { orderService } from "@/services/";

export const moduleOrder = {
	state: {
		count: 15,
		purchases: [],
		orderList: [],
		orderListFiltered: [],
		totalPricePurchases: 0,
	},
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
				return value.pk != purchase.pk;
			});

			if (!state.purchases.includes(purchase)) {
				state.purchases.push(purchase);
			}
		},
		addCountProduct(state: State, currentPurchase: Food) {
			const count = state.purchases.filter(
				(purchase) => purchase.pk == currentPurchase.pk
			);
			count[0].amount ? (count[0].amount = count[0].amount + 1) : 1;
		},

		decrementCountProduct(state: State, currentPurchase: Food) {
			const count = state.purchases.filter(
				(purchase) => purchase.pk == currentPurchase.pk
			);
			count[0].amount ? (count[0].amount = count[0].amount - 1) : 1;
		},
		orderList(state: State, orderList: Food[]) {
			state.orderList = orderList;
			state.orderListFiltered = orderList;
		},
		filterByCategory(state: State, category: string) {
			category != "todos"
				? (state.orderListFiltered = [
						...state.orderList.filter((order) => order.category == category),
				  ])
				: (state.orderListFiltered = state.orderList);
		},
		deletePurchase(state: State, purchasepk: number) {
			const purchaseAmountByProduct = state.purchases.find(
				(purchase) => purchase.pk === purchasepk
			);
			state.purchases = [
				...new Set(
					state.purchases.filter(
						(currentPurchase) => currentPurchase.pk != purchasepk
					)
				),
			];
			state.totalPricePurchases =
				state.totalPricePurchases -
				(purchaseAmountByProduct?.amount != undefined
					? purchaseAmountByProduct?.amount
					: 1) *
					(purchaseAmountByProduct?.price != undefined
						? purchaseAmountByProduct?.price
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
				commit("deletePurchase", currentPurchase.pk);
			}
		},
		async recipes({ commit }) {
			return await orderService.recipes().then((res) => {
				commit("orderList", res);

				return res;
			});
		},
	},
};
