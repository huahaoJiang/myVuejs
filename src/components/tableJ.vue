<template>
	<div id="demo">
	  <form id="search">
	    Search <input name="query" v-model="searchQuery">
	  </form>
	  <demo-grid
	    :data="gridData"
	    :columns="gridColumns"
	    :filter-key="searchQuery">
	  </demo-grid>
	</div>
</template>
<script>
	import demoGrid from './commonTable'
	export default {
		data () {
			return {
				searchQuery: '',
			    gridColumns: ['name', 'power'],
			    gridData: [
			      { name: 'Chuck Norris', power: Infinity },
			      { name: 'Bruce Lee', power: 9000 },
			      { name: 'Jackie Chan', power: 7000 },
			      { name: 'Jet Li', power: 8000 }
			    ]
			}
		},
		components: {
		    demoGrid
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style slot-scope>
	
</style>
