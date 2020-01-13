<template>
 <div class="page-grid">

                    <div class="page-overview purple-gradient">
                    <div class="content-column-left">
                        <div>
                            <h2>Iconography</h2>
                            <p>Our icons are the visual identifiers of Allied’s digital experiences, including our services and tools. Icons communicate the core idea and intent of a product in a simple, bold, and friendly way. While each icon is visually distinct, all product icons for our brand should be unified through concept and execution.</p>
                            <p>These guidelines are a starting point to ensure that your product icon colors and key elements reflect our brand identity.</p>
                        </div>
                        <div>
                            <img alt="Components Overview" class="overview-image" src="../images/components-overview.svg">
                        </div>

                    </div>
                </div>
                
                <div class="icon-page-layout">
                  <div class="icon-main">
                    <div class="icon-column-layout">
                    <div>
  <div v-for="(item,index) in iconlist" :key="index">
        <div id="show-modal" @click="selectItem(item)" class="overview-section-cta">
            <img :src="item.image" :alt="item.altTag">
            <p>{{item.title}}</p>
            </div>
  </div>

    <modal v-show="showModal" :item="selectedItem" @close="deselect"></modal>
                   <!-- <iconcomp v-bind:componentslist="componentslist"/> -->
                    </div> 
                  </div>
                  <div class="icon-bar">test</div>
                </div>
            </div> </div>

</template>

<script>
import modal from '../components/modal';

export default{
  name: 'icons',
  components: {
    modal
  },
  data () {
    return {
      title: 'icons',
      showModal: false,
      selectedItem: undefined,
      iconlist:[
      {
        title:"360",
        image       : require('../images/icons/360.svg'),
        altTag: "360 icon",
        shortDesc: "Accordions allow the user to expance and collapse large amount of content.",
        router: '/accordions',
        iconID:1
      },
      {
        title:"Buttons",
        image       : require('../images/buttons-preview.svg'),
        altTag: "Buttons",
        shortDesc: "Buttons communicate the action that will occur when the user touches them.",
        router: '/buttons',
        iconID:2
      },
      {
        title:"Data Table",
        image       : require('../images/data-tables-preview.svg'),
        altTag: "Data Table",
        shortDesc: "Datatables allow the user to scan and digest large amounts of data quickly.",
        router: '/tables',
        iconID:3
      },
      {
        title:"Date Picker",
        image       : require('../images/date-picker-preview.svg'),
        altTag: "Date Picker",
        shortDesc: "Date Pickers allow the user to input a date or a range of dates into our UI.",
        router: '/datepickers',
        iconID:4
      },
      {
        title:"Form Fields",
        image       : require('../images/forms-preview.svg'),
        altTag: "Form Fields",
        shortDesc: "Form fields allow the user to input data into our UI.",
        router: '/formfields',
        iconID:5
      },
      {
        title:"Selection Controls",
        image       : require('../images/selection-controls-preview.svg'),
        altTag: "Selection Controls",
        shortDesc: "Selection controls allow users to complete tasks that involve making choices",
        router: '/selection',
        iconID:6
      }
      ]
    };
  },
  methods: {
    selectItem(item) {
this.selectedItem = item
      this.showModal = true
    },
    deselect() {
      this.selectedItem = undefined
      this.showModal = false
    }
  }
}
</script>

<style scoped>


</style>