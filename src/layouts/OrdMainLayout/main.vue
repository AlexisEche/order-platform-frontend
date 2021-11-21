<template>
	<div class="main">
		<ord-navbar />
		<router-view />
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import OrdNavbar from "@/components/organisms/OrdNavbar";

export default defineComponent({
	name: "OrdMainLayout",
	components: {
		OrdNavbar,
	},
});
</script>

<style lang="scss" scoped>
@import url("./main.scss");
</style>
