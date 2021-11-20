import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Main",
		component: () => import("@/layouts/OrdMainLayout"),
		children: [
			{
				path: "/",
				name: "Home",
				component: () => import("@/pages/OrdHome"),
			},
		],
	},
];

export default routes;
