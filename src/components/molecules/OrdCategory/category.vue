<template>
	<div class="category">
		<button
			class="category--button"
			type="button"
			:style="`color: ${category.iconColor}`"
		>
			<font-awesome-icon :icon="category.iconName" />
			{{ category.name }}
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import healthly from "@/assets/healthly.png";
import { Category } from "@/typing/interface";

export default defineComponent({
	name: "OrdCategory",
	props: {
		category: {
			type: Object as () => Category,
			required: false,
		},
	},
	setup() {
		return {
			healthly,
		};
	},
});
</script>

<style lang="scss">
@import "./category.scss";
</style>
