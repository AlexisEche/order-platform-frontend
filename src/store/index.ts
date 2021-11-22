import { createStore } from "vuex";
import { moduleOrder } from "./order/order";
import { Food } from "@/typing/interface";

export interface State {
	count: number;
	title: string;
	purchases: Food[];
	totalPricePurchases: number;
}

export const store = createStore<State>({
	modules: {
		order: moduleOrder,
	},
});
