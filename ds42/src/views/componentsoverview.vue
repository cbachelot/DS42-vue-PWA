<template>
 <div class="page-grid">

                <div class="page-overview green-gradient">
                    <div class="content-column-left">
                        <div>
                            <h2>Components Overview</h2>
                            <p>The components makeup the parts and elements of the visual aspect of our front-end
                                applications.</p>
                            <p>
                                By ulitlizing these appropriately we will make visually consistent applications for our
                                users.
                            </p>
                        </div>
                        <div>
                            <img alt="Components Overview" class="overview-image" src="../images/components-overview.svg">
                        </div>

                    </div>
                </div>
                <div class="page-content">

<div class="column-layout" >
                    <cardcomp v-bind:componentslist="componentslist"/>
</div> 
</div>
            </div>

</template>

<script>
import cardcomp from '../components/Card';  
export default{
  name: 'componentsoverview',
  components: {
  cardcomp
  },
  data () {
    return {
      title: 'componentsoverview',
      componentslist:[
      {
        compTitle:"Accordions",
        image       : require('../images/accordion-preview.svg'),
        altTag: "Accordions",
        shortDesc: "Accordions allow the user to expance and collapse large amount of content.",
        router: '/accordions',
        compId:1
      },
      {
        compTitle:"Buttons",
        image       : require('../images/buttons-preview.svg'),
        altTag: "Buttons",
        shortDesc: "Buttons communicate the action that will occur when the user touches them.",
        router: '/buttons',
        compId:2
      },
      {
        compTitle:"Data Table",
        image       : require('../images/data-tables-preview.svg'),
        altTag: "Data Table",
        shortDesc: "Datatables allow the user to scan and digest large amounts of data quickly.",
        router: '/tables',
        compId:3
      },
      {
        compTitle:"Date Picker",
        image       : require('../images/date-picker-preview.svg'),
        altTag: "Date Picker",
        shortDesc: "Date Pickers allow the user to input a date or a range of dates into our UI.",
        router: '/datepickers',
        compId:4
      },
      {
        compTitle:"Form Fields",
        image       : require('../images/forms-preview.svg'),
        altTag: "Form Fields",
        shortDesc: "Form fields allow the user to input data into our UI.",
        router: '/formfields',
        compId:5
      },
      {
        compTitle:"Selection Controls",
        image       : require('../images/selection-controls-preview.svg'),
        altTag: "Selection Controls",
        shortDesc: "Selection controls allow users to complete tasks that involve making choices",
        router: '/selection',
        compId:6
      }
      ]
    }
  }
}
</script>
