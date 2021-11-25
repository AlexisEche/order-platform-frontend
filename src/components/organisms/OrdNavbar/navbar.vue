<template>
	<div class="navbar">
		<img class="navbar--logo" :src="logo" alt="logo" />
		<p class="navbar--logo__text" @click="goToHome">Redpple</p>
		<div class="navbar--cart_container">
			<font-awesome-icon
				@click="goToShoppingCart"
				:icon="faShoppingCart"
				class="navbar--cart"
			/>
			<button @click="logout" type="button" class="navbar--logout">
				Logout
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/manzana-roja.svg";
import { useRouter } from "vue-router";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default defineComponent({
	name: "OrdNavbar",
	setup() {
		const router = useRouter();
		const goToShoppingCart = () => {
			router.push({ name: "Cart" });
		};
		const goToHome = () => {
			router.push({ name: "Home" });
		};
		const logout = () => {
			localStorage.removeItem("token");
			router.go(0);
		};
		return {
			logo,
			faShoppingCart,
			goToShoppingCart,
			goToHome,
			logout,
		};
	},
});
</script>

<style lang="scss">
@import "./navbar.scss";
</style>
