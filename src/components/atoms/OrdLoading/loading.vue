<template>
	<div class="loading">
		<div class="lds-roller">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "OrdLoading",
});
</script>

<style lang="scss">
@import "./loading.scss";
</style>
