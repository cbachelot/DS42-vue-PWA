<template>
 <div class="page-grid">
          <div class="page-overview red-gradient">
            <div class="content-column-left">
              <div>
                <h2>Iconography</h2>
                <p>Our icons are the visual identifiers of Allied’s digital experiences, including our services and tools. Icons communicate the core idea and intent of a product in a simple, bold, and friendly way. While each icon is visually distinct, all product icons for our brand should be unified through concept and execution.</p>
                <p>These guidelines are a starting point to ensure that your product icon colors and key elements reflect our brand identity.</p>
              </div>
              <div>
                <img alt="Components Overview" class="overview-image" src="../images/icons-banner.svg">
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
                  <div @click="selectItem(item)" class="icon-section-cta">
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
        imagepng       : require('../images/icons/360.png'),
        altTag: "360 icon",
        description: "Goes with the 360 imagery on PDP.",
        class: "threesixty-icon",
        iconID:1
      },
        {
        title:"Account with Circle",
        image       : require('../images/icons/account-circle.svg'),
        imagepng       : require('../images/icons/account-circle.png'),
        altTag: "account circle",
        description: "Used to indicate user account access.",
        class: "account-circle-icon",
        iconID:1
      },
        {
        title:"Add Credit Card",
        image       : require('../images/icons/add-credit-card.svg'),
        imagepng       : require('../images/icons/add-credit-card.png'),
        altTag: "add credit card",
        description: "Used to indicate that a credit card can be added.",
        class: "add-credit-card-icon",
        iconID:1
      },
       {
        title:"Add Person",
        image       : require('../images/icons/add-person.svg'),
        imagepng       : require('../images/icons/add-person.png'),
        altTag: "add person",
        description: "Used to indiacte where a user will go to create a contact. This is used throughout Connect.",
        class: "add-person-icon",
        iconID:12
      },
        {
        title:"Add to Favorites",
        image       : require('../images/icons/add-to-favorites.svg'),
        imagepng       : require('../images/icons/add-to-favorites.png'),
        altTag: "add favorites",
        description: "Add to favorites is used sparingly to encourgage users to save favored content for a future date. It should always be placed logically near the item the user is adding.",
        class: "add-to-favorites-icon",
        iconID:1
      },
       {
        title:"Add to Calendar",
        image       : require('../images/icons/calendar-add.svg'),
        imagepng       : require('../images/icons/calendar-add.png'),
        altTag: "add to calendar",
        description: "Indicates a product or item can be added to an order.",
        class: "add-to-calendar-icon",
        iconID:2
      },
      {
        title:"Add to Order",
        image       : require('../images/icons/add-to-order.svg'),
        imagepng       : require('../images/icons/add-to-order.png'),
        altTag: "add to order",
        description: "Indicates a product or item can be added to an order.",
        class: "add-to-order-icon",
        iconID:11
      },
      {
        title:"Arrow",
        image       : require('../images/icons/arrow.svg'),
        imagepng       : require('../images/icons/arrow.png'),
        altTag: "arrow",
        description: "An arrow is used to indicate that an action will take you to another page.",
        class: "arrow-icon",
        iconID:6
      },
         {
        title:"Assign Back",
        image       : require('../images/icons/assign-back.svg'),
        imagepng       : require('../images/icons/assign-back.png'),
        altTag: "assign back",
        description: "Indicates that an item can be assigned to an account.",
        class: "assigne-back-icon",
        iconID:4
      },
      {
        title:"Assigned Leads",
        image       : require('../images/icons/assigned-leads.svg'),
        imagepng       : require('../images/icons/assigned-leads.png'),
        altTag: "assigned leads",
        description: "Used to mark assigned leads",
        class: "assigned-leads-icon",
        iconID:4
      },
      {
        title:"Attachment",
        image       : require('../images/icons/attachment.svg'),
        imagepng       : require('../images/icons/attachment.png'),
        altTag: "attachment",
        description: "Used to indicate that you can attach a file to an item. It should be placed logically near the item you will be attaching the file to.",
        class: "attachment-icon",
        iconID:5
      },
      {
     title:"Calendar Date Range Picker",
        image       : require('../images/icons/calendar-date-range-picker.svg'),
        imagepng       : require('../images/icons/calendar-date-range-picker.png'),
        altTag: "calendar date range",
        description: "Used for selecting a range of dates such as filtering, etc.",
        class: "calendar-date-range-picker-icon",
        iconID:7
      },
      {
     title:"Calendar Schedule",
        image       : require('../images/icons/calendar-schedule.svg'),
        imagepng       : require('../images/icons/calendar-schedule.png'),
        altTag: "calendar schedule",
        description: "Used to show a date has been picked. e.g. Picking a scheduled delivery date, an appointment, etc.",
        class: "calendar-schedule-icon",
        iconID:7
      },
      {
        title:"Chat Bubble",
        image       : require('../images/icons/chat-bubble.svg'),
        imagepng       : require('../images/icons/chat-bubble.png'),
        altTag: "Chat Bubble",
        description: "Used to indicate that a chat option is available. ",
        class: "chat-bubble-icon",
        iconID:8
      },
     {
        title:"Checkbox Blank",
        image       : require('../images/icons/check-box-outline-blank.svg'),
        imagepng       : require('../images/icons/check-box-outline-blank.png'),
        altTag: "checkbox blank",
        description: "This should be used as the Allied default unselected checkbox.",
        class: "checkbox-blank-icon",
        iconID:10
      },
        {
        title:"Checkbox Checked",
        image       : require('../images/icons/check-box-checked.svg'),
        imagepng       : require('../images/icons/check-box-checked.png'),
        altTag: "checkbox checked",
        description: "This is the selected state of the Allied default checkbox.",
        class: "check-box-checked-icon",
        iconID:10
      },
             {
        title:"Chevron",
        image       : require('../images/icons/chevron.svg'),
        imagepng       : require('../images/icons/chevron.png'),
        altTag: "chevron",
        description: "The chevron is not used in the same manner that an arrow is used. Chevrons are used to indicate that more information is avialable to a user by interacting with it or the title/bar that is is associated with.",
        class: "chevron-icon",
        iconID:10
      },
                  {
        title:"Chevron Filled",
        image       : require('../images/icons/chevron-filled.svg'),
        imagepng       : require('../images/icons/chevron-filled.png'),
        altTag: "chevron filled",
        description: "The chevron is not used in the same manner that an arrow is used. Chevrons are used to indicate that more information is avialable to a user by interacting with it or the title/bar that is is associated with.",
        class: "chevron-filled-icon",
        iconID:10
      },
      {
        title:"Circle Add",
        image       : require('../images/icons/circles-add.svg'),
        imagepng       : require('../images/icons/circles-add.png'),
        altTag: "circle add",
        description: "Used to indicate that the user can add an item to a given pattern. As an example, if a user can add a row to the bottom of a table, use this icon with the appropriate text lable.",
        class: "circle-add--icon",
        iconID:12
      },
        {
        title:"Close",
        image       : require('../images/icons/close.svg'),
        imagepng       : require('../images/icons/close.png'),
        altTag: "close",
        description: "Used to indicate that a user can close a component. This icon can be used in any available brand color to accomodate for accessibility. This is a low profile version of the close with circle icon. This is used primarily in connect.",
        class: "close-icon",
        iconID:12
      },
      {
        title:"Close with Circle",
        image       : require('../images/icons/close-with-circle.svg'),
        imagepng       : require('../images/icons/close-with-circle.png'),
        altTag: "close with circle",
        description: "Used to indicate that a user can close a component. This icon can be used in any available brand color to accomodate for accessibility. This is used primarily on the web.",
        class: "close-with-circle-icon",
        iconID:12
      },
      {
        title:"Cloud Upload",
        image       : require('../images/icons/cloud-upload.svg'),
        imagepng       : require('../images/icons/cloud-upload.png'),
        altTag: "cloud upload",
        description: "This icon is used to indicate that a user can upload files.",
        class: "cloud-upload-icon",
        iconID:12
      },
      {
        title:"Collapse All",
        image       : require('../images/icons/collapse-all.svg'),
        imagepng       : require('../images/icons/collapse-all.png'),
        altTag: "collapse all",
        description: "Used to collapse all sections of an accordion. e.g. The connect order pad uses this icon in a button to collapse all the line levels.",
        class: "collapse-all-icon",
        iconID:12
      },
         {
        title:"Comment",
        image       : require('../images/icons/comment.svg'),
        imagepng       : require('../images/icons/comment.png'),
        altTag: "comment",
        description: "Used to indicate that s user can add a comment.",
        class: "comment-icon",
        iconID:12
      },
         {
        title:"Compare",
        image       : require('../images/icons/compare.svg'),
        imagepng       : require('../images/icons/compare.png'),
        altTag: "comment",
        description: "Used to indicate that item comparison is availabe.",
        class: "compare-icon",
        iconID:12
      },
        {
        title:"Currency",
        image       : require('../images/icons/currency.svg'),
        imagepng       : require('../images/icons/currency.png'),
        altTag: "currency",
        description: "Used to indicate that a user can access diffefent currency options.",
        class: "currency-icon",
        iconID:12
      },
        {
        title:"Customers",
        image       : require('../images/icons/customers.svg'),
        imagepng       : require('../images/icons/customers.png'),
        altTag: "customers",
        description: "Used to indicate that multiple customer options are availabe.",
        class: "customers-icon",
        iconID:12
      },
          {
        title:"Dashboard",
        image       : require('../images/icons/dashboard.svg'),
        imagepng       : require('../images/icons/dashboard.png'),
        altTag: "dashboard",
        description: "Used to indicate that data dashboards are available.",
        class: "dashboard-icon",
        iconID:12
      },
        {
        title:"Delete",
        image       : require('../images/icons/delete.svg'),
        imagepng       : require('../images/icons/delete.png'),
        altTag: "delete",
        description: "Used to indicate to a user how to delete an item or component. It should be closely associated with the compoenent or item that will be deleted. Use confirmation messages as needed to reduce the chance a user accidentally deletes important items.",
        class: "delete-icon",
        iconID:12
      },
        {
        title:"Download",
        image       : require('../images/icons/download.svg'),
        imagepng       : require('../images/icons/download.png'),
        altTag: "download",
        description: "Used to indicate that an item or file can be downloaded.",
        class: "download-icon",
        iconID:12
      },
       {
        title:"Edit",
        image       : require('../images/icons/edit.svg'),
        imagepng       : require('../images/icons/edit.png'),
        altTag: "edit",
        description: "Used to indicate that an item or information can be edited.",
        class: "edit-icon",
        iconID:12
      },
        {
        title:"Email",
        image       : require('../images/icons/email-outlined.svg'),
        imagepng       : require('../images/icons/email-outlined.png'),
        altTag: "email",
        description: "Used to indicate that information is currently saved as an email address.",
        class: "email-outlined-icon",
        iconID:12
      },
          {
        title:"Excel",
        image       : require('../images/icons/excel.svg'),
        imagepng       : require('../images/icons/excel.png'),
        altTag: "excel",
        description: "Used to indicate that a file is an Excel file type.",
        class: "excel-icon",
        iconID:12
      },
      {
        title:"Excess Inventory",
        image       : require('../images/icons/excess-inventory.svg'),
        imagepng       : require('../images/icons/excess-inventory.png'),
        altTag: "excess inventory",
        description: "Used to indicate that excess inventory is available.",
        class: "excess-inventory-icon",
        iconID:12
      },
            {
        title:"Favorite Heart",
        image       : require('../images/icons/favorite-heart.svg'),
        altTag: "Favorite Heart",
        description: "Favorites is used to identify that an item has been added to favorites. It should always be placed logically near the item the user has added.",
        class: "favorite-heart-icon",
        iconID:12
      },
      {
        title:"Fax",
        image       : require('../images/icons/fax.svg'),
        altTag: "fax",
        description: "Used to identify that a fax option is available to the user.",
        class: "fax-icon",
        iconID:12
      },
          {
        title:"Filter - Single",
        image       : require('../images/icons/filter-single.svg'),
        altTag: "filter single",
        description: "Used primary for filter buttons that filter a single column in a data tables.",
        class: "filter-single-icon",
        iconID:12
      },
        {
        title:"Filters",
        image       : require('../images/icons/filters.svg'),
        altTag: "filters",
        description: "Used to identify that multiple filters are available. Used with a text lable for clarity and is most commonly used to access an off canvas that contains the filters.",
        class: "filters-icon",
        iconID:12
      },
       {
        title:"Fullscreen",
        image       : require('../images/icons/fullscreen.svg'),
        altTag: "fullscreen",
        description: "Used to show that a item can be expanded to a fullscreen mode.",
        class: "fullscreen-icon",
        iconID:12
      },
           {
        title:"Grid Display",
        image       : require('../images/icons/grid-display.svg'),
        altTag: "grid display",
        description: "Used to switch a users display pattern to a grid format.",
        class: "grid-display-icon",
        iconID:12
      },
              {
        title:"Hazardous Material",
        image       : require('../images/icons/hazardous-material.svg'),
        altTag: "hazardous material",
        description: "Used to identify that an item contains hazardous materials.",
        class: "hazardous-material-icon",
        iconID:12
      },
        {
        title:"Home",
        image       : require('../images/icons/home.svg'),
        altTag: "home",
        description: "Used to identify that a user can return to the “Home Screen” of their current application.",
        class: "home-icon",
        iconID:12
      },
              {
        title:"Info",
        image       : require('../images/icons/info.svg'),
        altTag: "info",
        description: "Used to identify that more information is available to the user by interacting with the icon.",
        class: "info-icon",
        iconID:12
      },
        {
        title:"Leads",
        image       : require('../images/icons/leads.svg'),
        altTag: "leads",
        description: "Used as the identifying icon for Lead Management in Connect.",
        class: "leads-icon",
        iconID:12
      },
        {
        title:"List Display",
        image       : require('../images/icons/list-display.svg'),
        altTag: "list display",
        description: "Used to switch a users displah pattern to a list format.",
        class: "list-display-icon",
        iconID:12
      },
          {
        title:"Lock",
        image       : require('../images/icons/lock.svg'),
        altTag: "lock",
        description: "Used in Connect for the admin section which handles our permissions.",
        class: "lock-icon",
        iconID:12
      },
         {
        title:"Map Marker",
        image       : require('../images/icons/map-marker.svg'),
        altTag: "map marker",
        description: "Identifys when address locations are found.",
        class: "map-marker-icon",
        iconID:12
      },
        {
        title:"Menu",
        image       : require('../images/icons/menu.svg'),
        altTag: "menu",
        description: "The default mobile menu icon for Allied digital applications.",
        class: "menu-icon",
        iconID:12
      },
         {
        title:"Mobile Phone",
        image       : require('../images/icons/mobile-phone.svg'),
        altTag: "mobile phone",
        description: "Used to identify a mobile number or mobile options.",
        class: "mobile-phone-icon",
        iconID:12
      },
         {
        title:"More",
        image       : require('../images/icons/more.svg'),
        altTag: "more",
        description: "Identifies when more information is available.",
        class: "more-icon",
        iconID:12
      },
           {
        title:"Notes",
        image       : require('../images/icons/notes.svg'),
        altTag: "notes",
        description: "Used for users to add notes.",
        class: "notes-icon",
        iconID:12
      },
          {
        title:"Notifications",
        image       : require('../images/icons/notifications-bell.svg'),
        altTag: "notifications",
        description: "Identifys the notification section. Can be accomplanied by numerical badges to indicate the number of notifcations.",
        class: "notifications-icon",
        iconID:12
      },
        {
        title:"Office Phone",
        image       : require('../images/icons/office-phone.svg'),
        altTag: "office phone",
        description: "Indicates when an office phone number is available or can be entered.",
        class: "office-phone-icon",
        iconID:12
      },
       {
        title:"Order Confirmation",
        image       : require('../images/icons/order-confirmation.svg'),
        altTag: "order confirmation",
        description: "Used to indicate order confirmation documents.",
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
        description: "Used to paste thing suchs as credit card tokens in Connect.",
        class: "paste-icon",
        iconID:12
      },
             {
        title:"PDF",
        image       : require('../images/icons/pdf.svg'),
        altTag: "paste",
        description: "Used to indicate that a file is a PDF file type.",
        class: "paste-icon",
        iconID:12
      },
        {
        title:"Plus",
        image       : require('../images/icons/plus.svg'),
        altTag: "plus",
        description: "Used to add additional items to the page.",
        class: "plus-icon",
        iconID:12
      },
          {
        title:"Previously Purchased",
        image       : require('../images/icons/previous-purchased.svg'),
        altTag: "Previously Purchased",
        description: "Used to identify when items have been previously purchased by the same user.",
        class: "previously-purchased-icon",
        iconID:12
      },
          {
        title:"Priority",
        image       : require('../images/icons/priority.svg'),
        altTag: "Priority",
        description: "Indicates something is of high priority.",
        class: "priority-icon",
        iconID:12
      },
           {
        title:"Quote",
        image       : require('../images/icons/quote.svg'),
        altTag: "quote",
        description: "Identifies a quote.",
        class: "quote-icon",
        iconID:12
      },
            {
        title:"Reassign",
        image       : require('../images/icons/reassign.svg'),
        altTag: "reassign",
        description: "Used to reassign leads/users/people to another list or page.",
        class: "reassign-icon",
        iconID:12
      },
              {
        title:"ROHS Compliant",
        image       : require('../images/icons/rohs-compliant.svg'),
        altTag: "rohs compliant",
        description: "Used to identify that an item is RoHS compliant. Orange checkmark indicates it's ROHS exempt",
        class: "rohs-compliant-icon",
        iconID:12
      },
             {
        title:"Search",
        image       : require('../images/icons/search.svg'),
        altTag: "search",
        description: "Used in the search bar or a search button to activate search functionality.",
        class: "search-icon",
        iconID:12
      },
           {
        title:"Send",
        image       : require('../images/icons/send.svg'),
        altTag: "send",
        description: "Used in a button to send a message or file to another user.",
        class: "send-icon",
        iconID:12
      },
     {
        title:"Service",
        image       : require('../images/icons/service.svg'),
        altTag: "service",
        description: "Indicates customer service.",
        class: "service-icon",
        iconID:12
      },
         {
        title:"Share",
        image       : require('../images/icons/share.svg'),
        altTag: "share",
        description: "Used for sharing the page with other users.",
        class: "share-icon",
        iconID:12
      },
               {
        title:"Shipping",
        image       : require('../images/icons/shipping.svg'),
        altTag: "shipping",
        description: "Indicates and item or order has been shipped. It usually has a tracking # associated with it.",
        class: "shipping-icon",
        iconID:12
      },
          {
        title:"Shipping Box",
        image       : require('../images/icons/shipping-box.svg'),
        altTag: "shipping box",
        description: "Used in Connect on the navigation for Supplier Central",
        class: "shipping-box-icon",
        iconID:12
      },
          {
        title:"Shopping Cart",
        image       : require('../images/icons/shopping-cart.svg'),
        altTag: "shipping box",
        description: "Indicates the shopping cart. This icon can also have numerical badges on the top right displaying the number of items the user has in the shopping cart.",
        class: "shopping-cart-icon",
        iconID:12
      },
          {
        title:"Special Pricing Agreement",
        image       : require('../images/icons/spa-icon.svg'),
        altTag: "Special Pricing Agreement",
        description: "Used to display to the user a product has a special pricing agreement attached to it.",
        class: "special-pricing-agreement-icon",
        iconID:12
      },
            {
        title:"Star",
        image       : require('../images/icons/star.svg'),
        altTag: "Star",
        description: "Used for ratings and is accompanied by multiple star family icons that can be star, star-half, and/or star-outline.",
        class: "star-icon",
        iconID:12
      },
          {
        title:"Star Half",
        image       : require('../images/icons/star-half.svg'),
        altTag: "Star half",
        description: "Used for ratings and is accompanied by multiple star family icons that can be star, star-half, and/or star-outline.",
        class: "star-half-icon",
        iconID:12
      },
      {
        title:"Star Outline",
        image       : require('../images/icons/star-outline.svg'),
        altTag: "Star Outline",
        description: "Used for ratings and is accompanied by multiple star family icons that can be star, star-half, and/or star-outline.",
        class: "stars-outline-icon",
        iconID:12
      },
        {
        title:"Timestamp",
        image       : require('../images/icons/timestamp.svg'),
        altTag: "time stamp",
        description: "Used with a timestamp to show when a user entered or modified data.",
        class: "time-stamp-icon",
        iconID:12
      },
         {
        title:"Tools",
        image       : require('../images/icons/tools.svg'),
        altTag: "tools",
        description: "Indicates where addtional tools are available.",
        class: "tools-icon",
        iconID:12
      },
          {
        title:"Unassigned",
        image       : require('../images/icons/unassigned.svg'),
        altTag: "unassigned",
        description: "Indicates unassigned leads/users/people to a list or page.",
        class: "unassigned-icon",
        iconID:12
      },
         {
        title:"View",
        image       : require('../images/icons/view.svg'),
        altTag: "view",
        description: "Used to preview hidden information.",
        class: "view-icon",
        iconID:12
      },
         {
        title:"Warning",
        image       : require('../images/icons/warning.svg'),
        altTag: "warning",
        description: "Used as a warning to indicate restrictions or road blocks.",
        class: "warning-icon",
        iconID:12
      },
         {
        title:"Website",
        image       : require('../images/icons/website.svg'),
        altTag: "website",
        description: "Indicates an external URL and will navigate the user out of their current experience.",
        class: "website-icon",
        iconID:12
      },
         {
        title:"Zoom In",
        image       : require('../images/icons/zoom-in.svg'),
        altTag: "zoom in",
        description: "Used for zooming into images or descriptions for visual clarity.",
        class: "zoom-in-icon",
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