import axios from "axios";
import { AxiosResponse } from "axios";
import { Food } from "@/typing/interface";

const BASE_URL =
	process.env.VUE_APP_BASE_URL != undefined ? process.env.VUE_APP_BASE_URL : "";

const recipes = async () => {
	return await axios.get(`${BASE_URL}recipes/`).then((res) => {
		const response: AxiosResponse = res;
		const data = response.data;
		return data;
	});
};

export const orderService = {
	recipes,
};
