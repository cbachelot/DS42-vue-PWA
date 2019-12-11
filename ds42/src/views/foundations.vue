<template>
 <div class="foundations">
 <div class="page-grid">
                <div class="page-overview red-gradient">
                    <div class="content-column-left">
                        <div>
                            <h2>Foundations Overview</h2>
                            <p>The foundations make up the building blocks of our products. A good understanding of our foundations will help your design and strategize how your product is built by addressing it from both a broad and detailed perspective.</p>
                        </div>
                        <div>
                            <img alt="Foundations Overview" class="overview-image" src="../images/foundations-overview-banner.svg">
                        </div>
                    </div>
                </div>
                <div class="page-content">
                    <cardcomp v-bind:componentslist="componentslist"/>
                    <!--<div class="four-column-layout">
                        <router-link  to="/colors">
                            <div class="overview-section-cta">
                                <img alt="Colors" src="../images/color-preview.svg">
                                <h4>Colors</h4>
                                <p class="overview-section-desc">Colors help us maintain good brand consistency while providing clear direct interfaces for our users.</p>
                            </div>
                        </router-link>
                        <router-link  to="/typography">
                            <div class="overview-section-cta">
                                <img alt="Typography" src="../images/type-preview.svg">
                                <h4>Typography</h4>
                                <p class="overview-section-desc">Good typography is important for our brand, which cherishes craftsmanship and quality.</p>
                            </div>
                        </router-link>
                    </div>-->
                </div>
            </div>
        </div>
</template>
<script>
import cardcomp from '../components/Card';  
export default{
  name: 'foundations',
  components: {
  cardcomp
  },
  data () {
    return {
      title: 'componentsoverview',
      componentslist:[
      {
        compTitle:"Colors",
        image       : require('../images/color-preview.svg'),
        altTag: "Colors",
        shortDesc: "Colors help us maintain good brand consistency while providing clear direct interfaces for our users.",
        router: '/colors',
        compId:1
      },
      {
        compTitle:"Typography",
        image       : require('../images/type-preview.svg'),
        altTag: "Typography",
        shortDesc: "A collection of DS42 components including code and guidelines.",
        router: '/typography',
        compId:2
      }
      ]
    }
  }
}
</script>
<style scoped>
</style>
