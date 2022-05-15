<template>
	<div class="text-center">
		<form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Register</h1>
			<p class="alert alert-danger" v-if="error">{{ error }}</p>

			<div class="form-group">
				<label for="inputEmail" class="sr-only">Email address</label>
				<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="email">
			</div>

			<div class="form-group">
				<label for="inputPassword" class="sr-only">Password</label>
				<input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="password">
			</div>

            <button class="btn btn-lg btn-primary btn-block" type="button" @click="register()">Register</button>
        </form>
	</div>
</template>

<script>
import { EventBus } from '@/utils'

export default {
	name: 'Register',
	data() {
		return {
			email: '',
			password: '',
			error: ''
		}
	},
	methods: {
		register() {
			this.error = ''

			this.$store.dispatch('register', {email: this.email, password: this.password})
				.then(() => {
					this.$router.push('/')
				})
				.catch((error) => {
                    // eslint-disable-next-line
                    console.error(error)
				})
		},
	},
	mounted () {
		EventBus.$on('failedRegistering', (error) => {
			this.error = error
		})
	},
	beforeDestroy () {
		EventBus.$off('failedRegistering')
	}
}
</script>
