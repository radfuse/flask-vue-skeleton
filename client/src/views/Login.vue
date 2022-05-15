<template>
	<div class="text-center">
		<form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
			<p class="alert alert-danger" v-if="error">{{ error }}</p>

			<div class="form-group">
				<label for="inputEmail" class="sr-only">Email address</label>
				<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="email">
			</div>

			<div class="form-group">
				<label for="inputPassword" class="sr-only">Password</label>
				<input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="password">
			</div>

            <button class="btn btn-lg btn-primary btn-block" type="button" @click="login()">Sign in</button>
        </form>
	</div>
</template>

<script>
import { EventBus } from '@/utils'

// https://stackabuse.com/single-page-apps-with-vue-js-and-flask-jwt-authentication/

export default {
	name: 'Login',
	data() {
		return {
			email: '',
			password: '',
			error: ''
		}
	},
	methods: {
		login() {
			this.error = ''

			this.$store.dispatch('login', {email: this.email, password: this.password})
				.then(() => this.$router.push('/'))
				.catch((error) => {
                    // eslint-disable-next-line
                    console.error(error)
				})
		},
	},
	mounted () {
		EventBus.$on('failedAuthentication', (error) => {
			this.error = error
		})
	},
	beforeDestroy () {
		EventBus.$off('failedAuthentication')
	}
}
</script>
