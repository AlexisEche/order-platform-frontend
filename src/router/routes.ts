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
	{
		path: "/login",
		name: "Login",
		component: () => import("@/layouts/OrdRegistrationLayout"),
		children: [
			{
				path: "/login",
				name: "Login",
				component: () => import("@/pages/OrdLogin"),
			},
			{
				path: "/signup",
				name: "Signup",
				component: () => import("@/pages/OrdSignup"),
			},
		],
	},
];

export default routes;
