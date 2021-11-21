<template>
	<div class="navbar">
		<img class="navbar--logo" :src="logo" alt="logo" />
		<p class="navbar--logo__text">Redpple</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/manzana-roja.svg";

export default defineComponent({
	name: "OrdNavbar",
	setup() {
		return {
			logo,
		};
	},
});
</script>

<style lang="scss">
@import "./navbar.scss";
</style>
