<template>
	<div class="card"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/manzana-roja.svg";

export default defineComponent({
	name: "OrdCard",
	setup() {
		return {
			logo,
		};
	},
});
</script>

<style lang="scss">
@import "./card.scss";
</style>
