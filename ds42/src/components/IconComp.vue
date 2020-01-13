<template>
                    <div>
<!--<a :href="data.router" v-for="(data,index) in componentslist" :key="index">-->

<!--<router-link :to="{path:data.router}" v-for="(data,index) in componentslist" :key="index" >   @click="goTodetail(data.iconId)" -->
  <div v-for="(data,index) in componentslist" :key="index">
  <a href="#open-modal">TEST</a>
  <div id="open-modal" class="modal-window">
  <div>
    <a href="#" title="Close" class="modal-close">Close</a>
    <h1>Voilà!</h1>
    <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
    <div><small>Check out</small></div>
    </div>
    </div>
            <div class="overview-section-cta">
            <img :src="data.image" :alt="data.altTag">
            <h4>{{data.compTitle}}</h4>
            <p class="overview-section-desc">{{data.shortDesc}}</p>
            </div>

 </div>
 
</div>
</template>
<style scoped>
.modal-window {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s; }

  .modal-window:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  .modal-window>div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #ffffff;
  }
</style>
<script>
export default{
  name: 'iconcomp',
  component: 'iconcomp',
  props: {
    componentslist: {
      type: Array
    }
  }
}
</script>