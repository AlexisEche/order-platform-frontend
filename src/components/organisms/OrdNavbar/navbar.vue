<template>
	<div class="navbar">
		<img class="navbar--logo" :src="logo" alt="logo" />
		<p class="navbar--logo__text" @click="goToHome">Redpple</p>
		<div class="navbar--cart_container" @click="goToShoppingCart">
			<font-awesome-icon :icon="faShoppingCart" class="navbar--cart" />
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
		return {
			logo,
			faShoppingCart,
			goToShoppingCart,
			goToHome,
		};
	},
});
</script>

<style lang="scss">
@import "./navbar.scss";
</style>
