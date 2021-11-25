import { State } from "../index";
import { Food } from "@/typing/interface";
import axios from "axios";

import { AxiosResponse } from "axios";

import { UserSignup, UserLogin } from "@/typing/interface";
import { MutationTree, ActionTree } from "vuex";
import { userService } from "@/services/";

export const moduleUser = {
	state: {},
	mutations: <MutationTree<State>>(<unknown>{}),
	actions: <ActionTree<State, any>>{
		login({ commit }, userLogin) {
			return userService
				.login(userLogin)
				.then((user) => {
					const response: AxiosResponse = user;

					const access = response.data.access;

					if (response.data) {
						localStorage.setItem("token", access || "");
					}
				})
				.catch((error) => {
					console.log("tenemos un", error);
				});
		},
		signup(_, userSignup) {
			return userService.signup(userSignup);
		},
	},
};
