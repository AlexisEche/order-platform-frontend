import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/signup"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");

  if (authRequired && !loggedIn) {
    return next("/login");
  }
  if (!authRequired && loggedIn) {
    next("/");
    return;
  }

  next();
});
export default router;
