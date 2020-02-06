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
        title:"Account with Circle",
        image       : require('../images/icons/account-circle.svg'),
        altTag: "account circle",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "account-circle-icon",
        iconID:1
      },
        {
        title:"Add Credit Card",
        image       : require('../images/icons/add-credit-card.svg'),
        altTag: "add credit card",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "add-credit-card-icon",
        iconID:1
      },
       {
        title:"Add Person",
        image       : require('../images/icons/add-person.svg'),
        altTag: "add person",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "add-person-icon",
        iconID:12
      },
        {
        title:"Add to Favorites",
        image       : require('../images/icons/add-to-favorites.svg'),
        altTag: "add favorites",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "add-to-favorites-icon",
        iconID:1
      },
       {
        title:"Add to Calendar",
        image       : require('../images/icons/calendar-add.svg'),
        altTag: "add to calendar",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "add-to-calendar-icon",
        iconID:2
      },
      {
        title:"Add to Favorites",
        image       : require('../images/icons/add-to-favorites.svg'),
        altTag: "add to favorites",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "add-to-favorites-icon",
        iconID:3
      },
      {
        title:"Add to Order",
        image       : require('../images/icons/add-to-order.svg'),
        altTag: "add to order",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "add-to-order-icon",
        iconID:11
      },
      {
        title:"Arrow",
        image       : require('../images/icons/arrow.svg'),
        altTag: "arrow",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "arrow-icon",
        iconID:6
      },
         {
        title:"Assign Back",
        image       : require('../images/icons/assign-back.svg'),
        altTag: "assign back",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "assigne-back-icon",
        iconID:4
      },
      {
        title:"Assigned Leads",
        image       : require('../images/icons/assigned-leads.svg'),
        altTag: "assigned leads",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "assigned-leads-icon",
        iconID:4
      },
      {
        title:"Attachment",
        image       : require('../images/icons/attachment.svg'),
        altTag: "attachment",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "attachment-icon",
        iconID:5
      },
      {
     title:"Calendar Add",
        image       : require('../images/icons/calendar-add.svg'),
        altTag: "calendar add",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "calendar-add-icon",
        iconID:7
      },
      {
     title:"Calendar Date Range Picker",
        image       : require('../images/icons/calendar-date-range-picker.svg'),
        altTag: "calendar date range",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "calendar-date-range-picker-icon",
        iconID:7
      },
      {
     title:"Calendar Schedule",
        image       : require('../images/icons/calendar-schedule.svg'),
        altTag: "calendar schedule",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "calendar-schedule-icon",
        iconID:7
      },
      {
        title:"Chat Bubble",
        image       : require('../images/icons/chat-bubble.svg'),
        altTag: "Chat Bubble",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "chat-bubble-icon",
        iconID:8
      },
     {
        title:"Checkbox Blank",
        image       : require('../images/icons/check-box-outline-blank.svg'),
        altTag: "checkbox blank",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "checkbox-blank-icon",
        iconID:10
      },
        {
        title:"Checkbox Checked",
        image       : require('../images/icons/check-box-checked.svg'),
        altTag: "checkbox checked",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "check-box-checked-icon",
        iconID:10
      },
      {
        title:"Checkmark with Circle",
        image       : require('../images/icons/checkmark-with-circle.svg'),
        altTag: "checkmark with circle",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "checkmark-with-circle-icon",
        iconID:10
      },
        {
        title:"Close",
        image       : require('../images/icons/close.svg'),
        altTag: "close",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "close-icon",
        iconID:12
      },
      {
        title:"Close with Circle",
        image       : require('../images/icons/close-with-circle.svg'),
        altTag: "close with circle",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "close-with-circle-icon",
        iconID:12
      },
      {
        title:"Cloud Upload",
        image       : require('../images/icons/cloud-upload.svg'),
        altTag: "cloud upload",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "cloud-upload-icon",
        iconID:12
      },
      {
        title:"Collapse All",
        image       : require('../images/icons/collapse-all.svg'),
        altTag: "collapse all",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "collapse-all-icon",
        iconID:12
      },
         {
        title:"Comment",
        image       : require('../images/icons/comment.svg'),
        altTag: "comment",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "comment-icon",
        iconID:12
      },
         {
        title:"Compare",
        image       : require('../images/icons/compare.svg'),
        altTag: "comment",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "compare-icon",
        iconID:12
      },
          {
        title:"Compliance Check",
        image       : require('../images/icons/compliance-check.svg'),
        altTag: "compliance check",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "compliance-check-icon",
        iconID:12
      },
        {
        title:"Currency",
        image       : require('../images/icons/currency.svg'),
        altTag: "currency",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "currency-icon",
        iconID:12
      },
        {
        title:"Customers",
        image       : require('../images/icons/customers.svg'),
        altTag: "customers",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "customers-icon",
        iconID:12
      },
          {
        title:"Dashboard",
        image       : require('../images/icons/dashboard.svg'),
        altTag: "dashboard",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "dashboard-icon",
        iconID:12
      },
        {
        title:"Delete",
        image       : require('../images/icons/delete.svg'),
        altTag: "delete",
        description: "Add to trash is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "delete-icon",
        iconID:12
      },
        {
        title:"Download",
        image       : require('../images/icons/download.svg'),
        altTag: "download",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "download-icon",
        iconID:12
      },
       {
        title:"Edit",
        image       : require('../images/icons/edit.svg'),
        altTag: "edit",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "edit-icon",
        iconID:12
      },
        {
        title:"Email",
        image       : require('../images/icons/email-outlined.svg'),
        altTag: "email",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "email-outlined-icon",
        iconID:12
      },
          {
        title:"Excel",
        image       : require('../images/icons/excel.svg'),
        altTag: "excel",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "excel-icon",
        iconID:12
      },
      {
        title:"Excess Inventory",
        image       : require('../images/icons/excess-inventory.svg'),
        altTag: "excess inventory",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "excess-inventory-icon",
        iconID:12
      },
      {
        title:"Fax",
        image       : require('../images/icons/fax.svg'),
        altTag: "fax",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "fax-icon",
        iconID:12
      },
          {
        title:"Filter - Single",
        image       : require('../images/icons/filter-single.svg'),
        altTag: "filter single",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "filter-single-icon",
        iconID:12
      },
        {
        title:"Filters",
        image       : require('../images/icons/filters.svg'),
        altTag: "filters",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "filters-icon",
        iconID:12
      },
       {
        title:"Fullscreen",
        image       : require('../images/icons/fullscreen.svg'),
        altTag: "fullscreen",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "fullscreen-icon",
        iconID:12
      },
           {
        title:"Grid Display",
        image       : require('../images/icons/grid-display.svg'),
        altTag: "grid display",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "grid-display-icon",
        iconID:12
      },
              {
        title:"Hazardous Material",
        image       : require('../images/icons/hazardous-material.svg'),
        altTag: "hazardous material",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "hazardous-material-icon",
        iconID:12
      },
        {
        title:"Home",
        image       : require('../images/icons/home.svg'),
        altTag: "home",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "home-icon",
        iconID:12
      },
              {
        title:"Info",
        image       : require('../images/icons/info.svg'),
        altTag: "info",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "info-icon",
        iconID:12
      },
        {
        title:"Leads",
        image       : require('../images/icons/leads.svg'),
        altTag: "leads",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "leads-icon",
        iconID:12
      },
        {
        title:"List Display",
        image       : require('../images/icons/list-display.svg'),
        altTag: "list display",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "list-display-icon",
        iconID:12
      },
          {
        title:"Lock",
        image       : require('../images/icons/lock.svg'),
        altTag: "lock",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "lock-icon",
        iconID:12
      },
         {
        title:"Map Marker",
        image       : require('../images/icons/map-marker.svg'),
        altTag: "map marker",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "map-marker-icon",
        iconID:12
      },
        {
        title:"Menu",
        image       : require('../images/icons/menu.svg'),
        altTag: "menu",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "menu-icon",
        iconID:12
      },
         {
        title:"Mobile Phone",
        image       : require('../images/icons/mobile-phone.svg'),
        altTag: "mobile phone",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "mobile-phone-icon",
        iconID:12
      },
         {
        title:"More",
        image       : require('../images/icons/more.svg'),
        altTag: "more",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "more-icon",
        iconID:12
      },
           {
        title:"Notes",
        image       : require('../images/icons/notes.svg'),
        altTag: "notes",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "notes-icon",
        iconID:12
      },
          {
        title:"Notifications",
        image       : require('../images/icons/notifications-bell.svg'),
        altTag: "notifications",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "notifications-icon",
        iconID:12
      },
        {
        title:"Office Phone",
        image       : require('../images/icons/office-phone.svg'),
        altTag: "office phone",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "office-phone-icon",
        iconID:12
      },
       {
        title:"Order Confirmation",
        image       : require('../images/icons/order-confirmation.svg'),
        altTag: "order confirmation",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "order-confirmation-icon",
        iconID:12
      },
          {
        title:"Order History",
        image       : require('../images/icons/order-history.svg'),
        altTag: "order history",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "order-history-icon",
        iconID:12
      },
              {
        title:"Paste",
        image       : require('../images/icons/paste.svg'),
        altTag: "paste",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "paste-icon",
        iconID:12
      },
             {
        title:"PDF",
        image       : require('../images/icons/pdf.svg'),
        altTag: "paste",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "paste-icon",
        iconID:12
      },
        {
        title:"Plus",
        image       : require('../images/icons/plus.svg'),
        altTag: "plus",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "plus-icon",
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