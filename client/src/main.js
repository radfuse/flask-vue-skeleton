import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initApiUrl, setApiHeader } from '@/api'
import { getAuthToken } from '@/jwt'

Vue.config.productionTip = false

initApiUrl(process.env.VUE_APP_API_URL)

if(getAuthToken()){
	setApiHeader()
}

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
