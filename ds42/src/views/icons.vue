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
                    <h3>Icon Library</h3>
                    <div class="icon-column-layout">
                    <div>
  <div v-for="(item,index) in iconlist" :key="index">
        <div id="show-modal" @click="selectItem(item)" class="icon-section-cta">
          <div class="icon-top">
          <img class="icon-image" :src="item.image" :alt="item.altTag"></div>
          <!--<i v-bind:class="item.class"></i>-->
            <p>{{item.title}}</p>
            </div>
  </div>

    <modal v-show="showModal" :item="selectedItem" @close="deselect"></modal>
                    </div> 
                  </div>
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
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "threesixty-icon",
        iconID:1
      },
       {
        title:"Add to Calendar",
        image       : require('../images/icons/add-to-calendar.svg'),
        altTag: "add to calendar",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "add-to-calendar",
        iconID:2
      },
      {
        title:"Add to Favorites",
        image       : require('../images/icons/add-to-favorites.svg'),
        altTag: "add to favorites",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "add-to-favorites",
        iconID:3
      },
           {
        title:"Add with Circle",
        image       : require('../images/icons/add-with-circle.svg'),
        altTag: "add with circle",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "add-with-circle",
        iconID:11
      },
      {
        title:"Assigned Leads",
        image       : require('../images/icons/assigned-leads.svg'),
        altTag: "assigned leads",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "assigned-leads",
        iconID:4
      },
      {
        title:"Attachment",
        image       : require('../images/icons/attachment.svg'),
        altTag: "attachment",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "attachment",
        iconID:5
      },
      {
        title:"Back",
        image       : require('../images/icons/back.svg'),
        altTag: "back",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "back",
        iconID:6
      },
      {
     title:"Calendar Date Picked",
        image       : require('../images/icons/calendar-date-picked.svg'),
        altTag: "calendar date picked",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "calendar-date-picked",
        iconID:7
      },
      {
        title:"Calendar Expired",
        image       : require('../images/icons/calendar-expired.svg'),
        altTag: "Calendar Expired",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "calendar-expired",
        iconID:8
      },
        {
        title:"Calendar Picker",
        image       : require('../images/icons/calendar-picker.svg'),
        altTag: "Calendar Picker",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "calendar-picker",
        iconID:9
      },
        {
        title:"Checkbox Blank",
        image       : require('../images/icons/checkbox-blank.svg'),
        altTag: "checkbox blank",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "checkbox-blank",
        iconID:10
      },
      {
        title:"Close with Circle",
        image       : require('../images/icons/close-with-circle.svg'),
        altTag: "close with circle",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "close-with-circle",
        iconID:12
      },
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
.icon-image {
  min-width: 25px;
  max-height: 25px;
}

</style>