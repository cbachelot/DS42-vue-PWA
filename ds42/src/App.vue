<template>
  <div id="app">

<!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>

<div class="ds42-main-grid">
    <a class="toggle open" href="#ds42-nav"><img src="./images/menu.svg" alt="menu icon"/></a>
    <div id="ds42-nav">
  <navigationcomp></navigationcomp>
  </div>

  <div class="ds42-body">
  <transition name="fade" mode="out-in" v-on:after-enter="afterEnter" appear>
  <router-view/>
  </transition>
  </div>
  </div>
  </div>
</template>

<script>
import navigationcomp from './components/NavigationComp';

export default {
  components: {
    navigationcomp

  },
  data () {
    return {
      title: 'componentsoverview',
      componentslist:[
      {
        compTitle:"Accordions",
        image       : require('./images/accordion-preview.svg'),
        altTag: "Accordions",
        shortDesc: "Accordions allow the user to expance and collapse large amount of content.",
        router: '/accordions',
        compId:1
      },
      {
        compTitle:"Buttons",
        image       : require('./images/buttons-preview.svg'),
        altTag: "Buttons",
        shortDesc: "Buttons communicate the action that will occur when the user touches them.",
        router: '/buttons',
        compId:2
      },
      {
        compTitle:"Data Table",
        image       : require('./images/data-tables-preview.svg'),
        altTag: "Data Table",
        shortDesc: "Datatables allow the user to scan and digest large amounts of data quickly.",
        router: '/tables',
        compId:3
      },
      {
        compTitle:"Date Picker",
        image       : require('./images/date-picker-preview.svg'),
        altTag: "Date Picker",
        shortDesc: "Date Pickers allow the user to input a date or a range of dates into our UI.",
        router: '/datepickers',
        compId:4
      },
      {
        compTitle:"Form Fields",
        image       : require('./images/forms-preview.svg'),
        altTag: "Form Fields",
        shortDesc: "Form fields allow the user to input data into our UI.",
        router: '/formfields',
        compId:5
      },
      
      {
        compTitle:"Selection Controls",
        image       : require('./images/selection-controls-preview.svg'),
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

<style>

@import './assets/ds-42.css';

/*
.moveInUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
.moveInUp-leave-active{
  animation: moveInUp .2s ease-in;
}
*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
