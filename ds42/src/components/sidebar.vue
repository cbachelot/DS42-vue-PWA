<template>
<!-- template for the sidebar component -->
<div id="sidebar-template">
    <transition name="sidebar">
    <div class="sidebar-mask">
        <div class="sidebar-container">
            <div class="icon-header">
                <div class="icon-close" @click="$emit('close')"><img src="../images/close-circle.svg" alt="close icon"/></div>
              <img :src="item.image" :alt="item.altTag" width="50px" height="100%"> <h4> {{item.title}} Icon </h4>
             <!-- <button class="sidebar-default-button" @click="$emit('close')"> 
                Close
              </button> --></div>
              <div class="icon-download-section">
              <div class="download-box"><a :href="item.image" download><img src="../images/icons/download.svg" alt="download icon">SVG</a></div>
              <div class="download-box"><a :href="item.image" download><img src="../images/icons/download.svg" alt="download icon">PNG</a></div>
              <div class="download-box"><a :href="item.image" download><img src="../images/icons/sketch.svg" alt="download icon">Sketch</a></div>
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
    </transition>
    </div>
</template>
<script>
export default{
  name: 'sidebar',
  template: '#sidebar-template',
  component: 'sidebar',
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
.sidebar-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  animation-name: fade;
  animation-duration: .1s;
}

 @keyframes fade {
    0%   { opacity: 0; 
}
    100%  { opacity:.5; 
    animation-timing-function: ease-in-out;}
}


.sidebar-wrapper {
  display: table-cell;
  background-color: rgba(0, 0, 0, .5);
  /*vertical-align: middle;*/
}

.sidebar-container {
  width: 20%;
  height: 100vh;
  position: fixed;
  right: 0px;
  /*margin: 0px auto;*/
  background-color: #e4e4e4;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  animation-name: slide;
  animation-duration: .2s;
  /*transition: all .3s ease;*/
 }

 @keyframes slide {
    0%   { right:-20%;
    animation-timing-function: ease-in-out;}
    100%  { right:0px; 
    animation-timing-function: ease-in-out;}
}

 .sidebar-container h4 {
     display: inline;
     vertical-align: middle;
 }

 .sidebar-container img {
     margin-right: 8px;
 }

.icon-header img {
    vertical-align: middle;
    margin-right: 8px;
    margin-bottom: 3px;
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
 
.sidebar-header h3 {
  margin-top: 0;
  color: #42b983;
}

.sidebar-body {
  margin: 20px 0;
}

.sidebar-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="sidebar" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the sidebar transition by editing
 * these styles.
 */

.sidebar-enter {
  opacity: 0;
}

.sidebar-leave-active {
  opacity: 0;
}

.sidebar-enter .sidebar-container,
.sidebar-leave-active .sidebar-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.icon-close {
    float:left;
    margin-left: -60px;
    cursor: pointer;
}


@media only screen and (max-width: 768px) {
.sidebar-container {    
width: 284px;
}
}
</style>




