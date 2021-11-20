<template>
	<div class="main">
		<router-view />
	</div>
</template>
<style lang="scss" scoped>
@import url("./main.scss");
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "OrdMainLayout",
});
</script>
