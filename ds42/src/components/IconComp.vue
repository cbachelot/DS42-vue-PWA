<template>
<div>
  <div v-for="(item,index) in iconlist" :key="index">
        <div id="show-modal" @click="selectItem(item)" class="icon-section-cta">
          <div class="icon-top"><img class="icon-image" :src="item.image" :alt="item.altTag"></div>
          <!--<i v-bind:class="item.class"></i>-->
            <p>{{item.title}}</p>
  </div>

    <modal v-show="showModal" :item="selectedItem" @close="deselect"></modal>
                    </div> 
                  </div>

</template>
<style scoped>

</style>
<script>
import modal from '../components/modal';
export default{
  name: 'iconcomp',
   components: {
    modal
  },
  component: 'iconcomp',
  props: {
    iconlist: {
      type: Array
    }
  }
}
</script>