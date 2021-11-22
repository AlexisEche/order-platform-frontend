<template>
	<div class="navbar">
		<img class="navbar--logo" :src="logo" alt="logo" />
		<p class="navbar--logo__text">Redpple</p>
		<div class="navbar--cart_container">
			<font-awesome-icon :icon="faShoppingCart" class="navbar--cart" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/manzana-roja.svg";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default defineComponent({
	name: "OrdNavbar",
	setup() {
		return {
			logo,
			faShoppingCart,
		};
	},
});
</script>

<style lang="scss">
@import "./navbar.scss";
</style>
