import { createStore } from "vuex";
import { moduleOrder } from "./order/order";
import { moduleUser } from "./user/user";
import { Food } from "@/typing/interface";

export interface State {
	count: number;
	title: string;
	purchases: Food[];
	orderList: Food[];
	orderListFiltered: Food[];
	totalPricePurchases: number;
}

export const store = createStore<State>({
	modules: {
		order: moduleOrder,
		user: moduleUser,
	},
});
