<template>
  <div id="app">
  	<div class="header">
  		<div class="left-top">
  			<img src="./assets/logo.png">
  			<span>My Vue Demo</span>
  		</div>
  		<div class="right-top">
  			<span>welcome to MyProject</span>
  		</div>
		</div>
		<div class="bodys">
			<div class="left">
  			<ul>
  				<li><h3>My Demo</h3></li>
  				<li><router-link to="/">hello</router-link></li>
  				<li><router-link to="/editorJ">editor</router-link></li>
  				<li><router-link to="/tableJ">tables</router-link></li>
  				<!--<li><router-link to="/commonDialog">modal</router-link></li>-->
  			</ul>
			</div>
	  	<div class="right">
	  		<transition name="slide-fade">
	  			<router-view></router-view>
	  		</transition>
	  	</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return {
  		showModal: false
  	}
  }
}
</script>

<style>
	body{
		margin: 0 !important;
	}
.header{
	width: 100%;
	height: 60px;
	position: fixed;
	top: 0px;
	box-shadow: 0 0 1px rgba(0,0,0,0.25);
	transition: background-color 0.3s ease-in-out;
	z-index: 2;
	background-color: #fff;
}
.header span{
	line-height: 1.85em;
	font-weight: bold;
	font-size: 1.3em;
}
.bodys{
	margin-top: 60px;	
	float: left;
	width: 100%;
}
.left-top img{
	width: 40px;
	float: left;
}
.left{
	width: 20%;
	float:left;
	height: 600px;
}
.left-top{
	padding: 10px 45px;
	width: 20%;
	float: left;
}
.right-top{
	padding: 10px 75px;
	width: 80%;
	float: left;
}
.right{
	width: 80%;
	float:left;
	height: 600px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul{
	display: block;
	list-style-type: none;
	margin: 0;
	line-height: 1.5em;
	list-style-type: disc;
	/*-webkit-margin-before: 1em;
	-webkit-margin-after: 1em;
	-webkit-margin-start: 0px;
	-webkit-margin-end: 0px;
	-webkit-padding-start: 40px;*/
}
li{
	display: list-item;
	list-style-type: none;
}
a{
	text-decoration: none;
	color: #34495e;
	font-size: 0.85em;
}
.router-link-active {
    font-weight: bold;
    color: #42b983;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
