<template>
<!-- template for the modal component -->
<div id="modal-template">
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <div class="icon-header">
              <img :src="item.image" :alt="item.altTag" width="50px" height="100%"> <h4> {{item.title}} Icon </h4>
              <button class="modal-default-button" @click="$emit('close')">
                Close
              </button> </div>
              <div class="icon-download-section">
              <div class="download-box"><a :href="item.image" download><img src="../images/icons/download.svg">SVG</a></div>
              <div class="download-box"><a :href="item.image" download><img src="../images/icons/download.svg">PNG</a></div>
              <div class="download-box"><a :href="item.image" download><img src="../images/icons/sketch.svg">Sketch</a></div>
              </div>
              <div class="icon-body">
              <h5>Description</h5>
              <p>{{item.description}}</p>
              <h5>Simple Embed</h5>
           <figure>
  <pre><code>&lt;i class="{{item.class}}"&gt; Example Content &lt;/i&gt;</code></pre>
</figure>
              </div>
            </div>
          </div>
        </div>
    </transition>
    </div>
</template>
<script>
export default{
  name: 'modal',
  template: '#modal-template',
  component: 'modal',
  props:['item', 'open']
}
</script>

<style scoped>

pre {
    padding: 10px;
    background-color: #001628;
    color: #f4f4f4;
    font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
     overflow-x: auto;
            white-space: pre-wrap;
            white-space: -moz-pre-wrap;
            white-space: -pre-wrap;
            white-space: -o-pre-wrap;
            word-wrap: break-word;
}

figure {
    margin:0px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  /*vertical-align: middle;*/
}

.modal-container {
  width: 310px;
  height: 100vh;
  position: fixed;
  right: 0;
  /*margin: 0px auto;*/
  background-color: #e4e4e4;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
 }

 .modal-container h4 {
     display: inline;
 }

.modal-container img {
    vertical-align: middle;
    margin-right: 8px;
}

.icon-header {
    
    background-color:#ffffff;
      padding: 25px 20px 20px 20px;
}

.icon-download-section {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color:#ffffff;
}

.icon-body {
  padding: 20px 20px;
}

.download-box {
    display: inline;
    border: 1px solid #e4e4e4;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
 
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>




