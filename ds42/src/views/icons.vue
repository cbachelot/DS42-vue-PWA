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
            <div class="icon-title-area">
                <div class="icon-title">
                <h3>Icon Library</h3></div>
            <div class="search-area">
                <form id="form">
                <label class="form-input">
                <input type="text" v-model="search"  required />
                <span class="label">Search Icons</span>
                <span class="underline"></span>
                </label>
                </form> 
            </div> 
          </div>
          <div class="icon-column-layout">
          <!-- SAVING THIS FOR LATER to build a component <iconcomp v-bind:iconlist="filtericonlist"/> -->
            <div> <!-- Layout is applied here for when we move to a component -->
            <!-- AND THIS <div v-for="(item,index) in iconlist" :key="index"> -->
              <div v-for="(item,index) in filtericonlist" :key="index">
                  <div id="show-sidebar" @click="selectItem(item)" class="icon-section-cta">
                    <div class="icon-top"><img class="icon-image" :src="item.image" :alt="item.altTag"></div>
                    <p>{{item.title}}</p>
              </div>
            </div> 
            <sidebar v-show="showsidebar" :item="selectedItem" @close="deselect"></sidebar>
          </div>      
          </div>
        </div>
            </div> 
     <div class="icon-design"> 
       <div class="icon-desc">
       <h3>Designing Icons for Allied</h3>
       <p>The tactile and visual quality of Allied’s digital experience is reflected in the design of our icons. Each icon is a clean, clear representation of the tool or action associate with that icon. The quality of our design is reflected in the sharp edges our icons retain when scaled to both large and small sizes.</p>
       </div>
       <div class="icon-stan">
       <h4>Icon Standards</h4>
       <p>When creating an icon, the bounding around the icon should retain the standard sizes of 16x16, 32x32, and 48x48.</p> 
       <p>Avoid anitaliasing, and retain hard edges by utilizing SVG file formats.</p> 
       <p>When designing a vertical or horizontal icon, center the icon in your standard size area and split the difference for equal spacing. Youc an design at any width or height as needed for the icon as long as the additional space can be split evenly in the container.</p>  
       </div>
       <div class="icon-stanimg"><img src="../images/icon-size-example.svg" alt="icon example"></div>
       <div class="icon-stanimg2"><img src="../images/Icon-Res-Example.svg" alt="icon example"></div>
       <div class="icon-stanimg3"><img src="../images/icon-space-example.svg" alt="icon example"></div>
     </div>       
            
</div>

</template>

<script>

import sidebar from '../components/sidebar';
export default{
  name: 'icons',
  components: {
    sidebar
  },
  data () {
    return {
      search: "",
      title: 'icons',
      showsidebar: false,
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
        image       : require('../images/icons/calendar-add.svg'),
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
        image       : require('../images/icons/circles-add.svg'),
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
        title:"Arrow",
        image       : require('../images/icons/arrow.svg'),
        altTag: "arrow",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "arrow",
        iconID:6
      },
      {
     title:"Calendar Schedule",
        image       : require('../images/icons/calendar-schedule.svg'),
        altTag: "calendar date picked",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "calendar-date-picked",
        iconID:7
      },
      {
        title:"Chat Bubble",
        image       : require('../images/icons/chat-bubble.svg'),
        altTag: "Chat Bubble",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "chat-bubble",
        iconID:8
      },
        {
        title:"Calendar Date Range",
        image       : require('../images/icons/calendar-date-range-picker.svg'),
        altTag: "Calendar Date Range Picker",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "calendar-date-range-picker",
        iconID:9
      },
        {
        title:"Checkbox Blank",
        image       : require('../images/icons/check-box-outline-blank.svg'),
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
      this.showsidebar = true
    },
    deselect() {
      this.selectedItem = undefined
      this.showsidebar = false
    }
  },
  computed: {
    filtericonlist: function() {
      let filtered = this.iconlist;
      if (this.search) {
        filtered = this.iconlist.filter(
          m => m.title.toLowerCase().indexOf(this.search) > -1
          
        );
      }
      if (this.select) {
        filtered = this.iconlist.filter(
          m => m.category.toLowerCase() === this.select.toLowerCase()
        );
      }
      return filtered;
    }

  }
}
</script>

<style scoped>
.icon-image {
  min-width: 30px;
  max-height: 25px;
}


.icon-design {
  display: grid;
  grid-template-columns: .75fr 1fr 1fr;
  grid-template-areas: "desc desc desc"
                       "stan stanimg stanimg2"
                       "stan stanimg3 .";
  padding: 30px 100px 30px 100px;
  margin-bottom: 30px;
  grid-column-gap: 3%;
  grid-row-gap: 3%;
}

.icon-desc {
  grid-area: desc;
}

.icon-stan {
  grid-area: stan;
}

.icon-stanimg {
  grid-area: stanimg;
}

.icon-stanimg img {
  width:100%;
}
.icon-stanimg2 {
  grid-area: stanimg2;
}

.icon-stanimg2 img {
  width:100%;
}

.icon-stanimg3 {
  grid-area: stanimg3;
}

.icon-stanimg3 img {
  width:100%;
}

</style>