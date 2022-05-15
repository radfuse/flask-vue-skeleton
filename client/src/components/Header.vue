<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <a class="navbar-brand" href="#">Brand</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="item in menuItems" :key="item.label">
                        <router-link class="nav-link" v-if="item.to" :to="{name:item.to}">{{item.label}}</router-link>
                        <router-link class="nav-link" v-if="item.url" :to="item.url">{{item.label}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { EventBus } from '@/utils'

export default {
    name: 'Header',
    data() {
        const allMenuItems = [
            { label: 'Home', url: '/'},
            { label: 'Login', to: 'Login', requiresGuest: true },
            { label: 'Register', to: 'Register', requiresGuest: true },
            { label: 'Logout', to: 'Logout', requiresAuth: true },
        ]

        return {
            allMenuItems,
            loggedIn: false,
        }
    },
    computed: {
        menuItems() {
            let menuItems = [...this.allMenuItems]

            return menuItems.filter((item) => {            
                if(item.requiresAuth && !this.loggedIn)
                    return false
            
                if(item.requiresGuest && this.loggedIn)
                    return false

                return true
            })
        }
    },
	mounted () {
        this.loggedIn = this.$store.getters.isAuthenticated

		EventBus.$on('loginStateChange', (state) => {
			this.loggedIn = state
		})
	},
}
</script>
