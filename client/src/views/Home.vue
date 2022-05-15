<template>
	<div>
		{{ msg }}
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Home',
	data() {
		return {
			msg: '',
		}
	},
	methods: {
		getMessage() {
			axios.get('/ping')
				.then((res) => {
					this.msg = res.data
				})
				.catch((error) => {
					// eslint-disable-next-line
					console.error(error)
				})
		},
	},
	created() {
		this.getMessage()
	},
}
</script>
