<template>
	  <transition name="dialog">
	    <div class="dialog-mask" id="dialog-template">
	      <div class="dialog-wrapper">
	        <div class="dialog-container" :style="{ width: dialogStyle }">
	          <div class="dialog-header">
	            <slot name="header">
	              default header
	            </slot>
	          </div>
	
	          <div class="dialog-body">
	            <slot name="body">
	              default body
	            </slot>
	          </div>
	
	          <div class="dialog-footer">
	            <slot name="footer">
	              default footer
	              <button class="dialog-default-button" @click="$emit('close')">
	                OK
	              </button>
	            </slot>
	          </div>
	        </div>
	      </div>
	    </div>
	  </transition>
</template>
<script>
	/*import Vue from 'vue'
  Vue.component('dialog', {
  	props: ['dialogStyle'],
	  template: '#dialog-template'
	})*/
  export default {
	  name: 'dialog',
	  props: ['dialogStyle']
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dialog-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  text-align: left;
}

.dialog-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.dialog-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.dialog-mask .dialog-header h3 {
  margin-top: 0;
  color: #42b983;
}

.dialog-mask .dialog-body {
  margin: 20px 0;
}

.dialog-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="dialog" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the dialog transition by editing
 * these styles.
 */

.dialog-enter {
  opacity: 0;
}

.dialog-leave-active {
  opacity: 0;
}

.dialog-enter .dialog-container,
.dialog-leave-active .dialog-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
