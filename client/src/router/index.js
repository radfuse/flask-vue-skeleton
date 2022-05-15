import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { requiresAuth: true }
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: { requiresGuest: true }
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		meta: { requiresGuest: true }
	},
	{
		path: '/logout',
		name: 'Logout',
		component: {
			beforeRouteEnter(to, from, next) {
				const destination = {
					path: "/login"
				}
				
				store.dispatch("logout")
				next(destination)
			}
		}
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach ((to, from, next) => {
	const isLoggedIn = store.getters.isAuthenticated
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
	const requiresGuest = to.matched.some((record) => record.meta.requiresGuest)
  
	if (requiresAuth && !isLoggedIn) {
		next({ name: 'Login' })
	}
  
	if (requiresGuest && isLoggedIn) {
		next({ name: 'Home' })
	}
  
	next()
})

export default router
