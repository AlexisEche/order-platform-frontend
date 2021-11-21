<template type="text/x-template">
	<div class="modal--mask">
		<div class="modal--wrapper">
			<div class="modal--container">
				<font-awesome-icon
					class="modal--close"
					@click="$emit('close')"
					:icon="faTimes"
				/>

				<div class="modal-body">
					<div name="body">
						<slot />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/manzana-roja.svg";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default defineComponent({
	name: "OrdModal",
	props: {
		showModal: {
			type: Boolean,
			default: false,
		},
	},
	setup() {
		return {
			logo,
			faTimes,
		};
	},
});
</script>

<style lang="scss">
@import "./modal.scss";
</style>

<!-- template for the modal component -->

<!-- app -->
