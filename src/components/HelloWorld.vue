<template>
  <div class="hello">
  	<img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
	  <modal dialog-style="600px"  v-if=	"showModal" @close="showModal = false">
	    <h3 slot="header">custom header</h3>
	    <h3 slot="body">确认显示吗？</h3>
	  </modal>
  </div>
</template>

<script>
import modal from './commonDialog'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Apphahahaha',
      showModal: false,
      /*modal:{
      	modalStyle: "600px"
      }*/
    }
  },
  components: {
    modal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
