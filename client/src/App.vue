<template>
	<div id="app">
		<Header />
		
		<main role="main" class="flex-shrink-0">
			
			<div class="container">
				<router-view/>
			</div>
		</main>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
	name: 'App',
	components: {
		Header
	}
}
</script>