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
					placeholder="Firstname"
					class="signup--container__form_input"
					v-model="userSignup.first_name"
				/>
				<input
					placeholder="Lastname"
					class="signup--container__form_input"
					v-model="userSignup.last_name"
				/>

				<input
					placeholder="Username @"
					class="signup--container__form_input"
					v-model="userSignup.email"
				/>

				<input
					type="password"
					placeholder="Password"
					class="signup--container__form_input"
					v-model="userSignup.password"
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					class="signup--container__form_input"
					v-model="userSignup.password2"
				/>
				<button
					class="signup--container__form_submitButton"
					@click.prevent="signupFromStoreMethod"
				>
					Sign up
				</button>
			</form>
			<span class="signup--register-container"
				>You have an account ?
				<span class="signup--register" @click="goToLogin">Login</span>
			</span>
		</div>
		<transition name="modal">
			<ord-modal v-if="showModal" @close="showModal = false">
				<div>
					<p>✓ Email requerido</p>
					<p>✓ Firstname requerido</p>
					<p>✓ Lastname requerido</p>
					<p>✓ Password no menor de 9 dígitos</p>
					<p>✓ Confirm password requerido</p>
				</div>
			</ord-modal>
		</transition>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserSignup } from "@/typing/interface";
import redpple from "@/assets/manzana-roja.svg";
import signup from "@/assets/signup.svg";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import OrdModal from "@/components/organisms/OrdModal";

export default defineComponent({
	name: "OrdSignup",
	components: {
		OrdModal,
	},
	setup() {
		const router = useRouter();
		const store = useStore();
		const goToLogin = () => {
			router.push({ name: "Login" });
		};
		const showModal = ref(false);
		const userSignup = ref<UserSignup>({
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			password2: "",
		});
		let isLoading = ref(false);

		const signupFromStore = () => {
			return store.dispatch("signup", userSignup.value);
		};

		const signupFromStoreMethod = () => {
			if (userSignup.value.email && userSignup.value.password) {
				isLoading.value = true;
				const signup = signupFromStore();
				return signup
					.then(() => router.push({ name: "Login" }))
					.catch((error) => (error ? (showModal.value = true) : false));
			}
		};

		return {
			userSignup,
			isLoading,
			signupFromStoreMethod,
			goToLogin,
			redpple,
			signup,
			showModal,
		};
	},
});
</script>
<style lang="scss" scoped>
@import "./signup.scss";
</style>
