<template>
	<div class="home">
		<ord-banner />
		<ord-categories />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrdBanner from "@/components/organisms/OrdBanner";
import OrdCategories from "@/components/organisms/OrdCategories";
export default defineComponent({
	name: "OrdHome",
	components: {
		OrdBanner,
		OrdCategories,
	},
});
</script>
<style lang="scss" scoped>
@import url("./home.scss");
</style>
