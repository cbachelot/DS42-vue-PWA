<template>
                    <div>
<!--<a :href="data.router" v-for="(data,index) in componentslist" :key="index">-->
<router-link :to="{path:data.router}" v-for="(data,index) in componentslist" :key="index" >
            <div class="overview-section-cta">
            <img :src="data.image" :alt="data.altTag">
            <h4>{{data.compTitle}}</h4>
            <p class="overview-section-desc">{{data.shortDesc}}</p>
            </div>
 </router-link>
</div>
</template>
<script>
export default{
  name: 'icondetails',
  component: 'icondetails',
  props: {
    componentslist: {
      type: Array
    }
  }
}
</script>