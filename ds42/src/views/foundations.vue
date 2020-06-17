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
                    <div class="column-layout" >
                    <cardcomp v-bind:componentslist="componentslist"/>
                    </div>
                    
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
        compTitle:"Iconography",
        image       : require('../images/icon-preview.svg'),
        altTag: "Iconography",
        shortDesc: "Icons help us communicate clearly and effectively with the user through simple visual quest.",
        router: '/icons',
        compId:2
      },
         {
        compTitle:"Imagery",
        image       : require('../images/imagery-2.svg'),
        altTag: "Imagery",
        shortDesc: "Imagery can be a powerful tool in enhancing the overall user experience, visual aesthetic, and providing context to messaging that is difficult to explain.",
        router: '/imagery',
        compId:2
      },
         {
        compTitle:"Layouts",
        image       : require('../images/layouts.svg'),
        altTag: "Layouts",
        shortDesc: "The responsive layouts provided below adapt to device screen sizes, orientation and even specific browsers to ensure consistency across layouts.",
        router: '/gridlayouts',
        compId:2
      },
      {
        compTitle:"Typography",
        image       : require('../images/type-preview.svg'),
        altTag: "Typography",
        shortDesc: "Typography helps us maintain our voice with the customer.",
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
