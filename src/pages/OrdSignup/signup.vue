<template>
	<div class="signup">
		<div class="signup--container__image_principal">
			<img :src="signup" alt="" class="signup--image_principal" />
		</div>
		<div class="signup--container">
			<div class="signup--logo-container">
				<span class="signup--title">Sign up to Redpple</span>
				<img class="signup--logo" :src="redpple" alt="" />
			</div>
			<span
				>Hello! Sign up with your data that you entered during
				registration</span
			>

			<form class="signup--container__form">
				<input
					placeholder="Username"
					class="signup--container__form_input"
					v-model="userSignup.username"
				/>

				<input
					placeholder="Password"
					class="signup--container__form_input"
					v-model="userSignup.password"
				/>
				<input
					placeholder="Confirm Password"
					class="signup--container__form_input"
					v-model="userSignup.passwordConfirm"
				/>
				<button
					class="signup--container__form_submitButton"
					@click="signupFromStoreMethod"
				>
					Sign up
				</button>
			</form>
			<span class="signup--register-container"
				>You have an account ?
				<span class="signup--register" @click="goToLogin">Login</span>
			</span>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserSignup } from "@/typing/interface";
import redpple from "@/assets/manzana-roja.svg";
import signup from "@/assets/signup.svg";

export default defineComponent({
	name: "Ordsignup",
	components: {},
	setup() {
		const userSignup = ref<UserSignup>({
			username: "",
			password: "",
			passwordConfirm: "",
		});

		let isLoading = ref(false);

		const signupFromStore = () => {
			console.log("signup");
		};

		const signupFromStoreMethod = () => {
			if (userSignup.value.username && userSignup.value.password) {
				isLoading.value = true;
				const test = signupFromStore();
			}
		};

		const goToLogin = () => {
			console.log("goToLogin");
		};

		return {
			userSignup,
			isLoading,
			signupFromStoreMethod,
			goToLogin,
			redpple,
			signup,
		};
	},
});
</script>
<style lang="scss" scoped>
@import "./signup.scss";
</style>
