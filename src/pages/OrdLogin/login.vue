<template>
	<div class="login">
		<div class="login--container__image_principal">
			<img :src="login" alt="" class="login--image_principal" />
		</div>
		<div class="login--container">
			<div class="login--logo-container">
				<span class="login--title">Login to Redpple</span>
				<img class="login--logo" :src="redpple" alt="" />
			</div>
			<span
				>Welcome back! login with your data that you entered during
				registration</span
			>

			<form class="login--container__form">
				<input
					placeholder="Username"
					class="login--container__form_input"
					v-model="userLogin.username"
				/>

				<input
					placeholder="Password"
					class="login--container__form_input"
					v-model="userLogin.password"
				/>
				<button
					class="login--container__form_submitButton"
					@click="loginFromStoreMethod"
				>
					Login
				</button>
			</form>
			<span class="login--register-container"
				>Don’t have an account ?
				<span class="login--register" @click="goToRegister">Register</span>
			</span>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserLogin } from "@/typing/interface";
import redpple from "@/assets/manzana-roja.svg";
import login from "@/assets/login.svg";

export default defineComponent({
	name: "OrdLogin",
	components: {},
	setup() {
		const variable = ref<InstanceType<typeof String>>("");
		const isPwd = ref<InstanceType<typeof Boolean>>(true);
		const right = ref<InstanceType<typeof Boolean>>(false);
		const userLogin = ref<UserLogin>({
			username: "",
			password: "",
		});

		let isLoading = ref(false);

		const loginFromStore = () => {
			console.log("login");
		};

		const loginFromStoreMethod = () => {
			if (userLogin.value.username && userLogin.value.password) {
				isLoading.value = true;
				const test = loginFromStore();
			}
		};

		const goToRegister = () => {
			console.log("gotoregister");
		};

		return {
			isPwd,
			right,
			userLogin,
			isLoading,
			loginFromStoreMethod,
			variable,
			goToRegister,
			redpple,
			login,
		};
	},
});
</script>
<style lang="scss" scoped>
@import "./login.scss";
</style>
