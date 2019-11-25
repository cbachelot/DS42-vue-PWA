<template>
<div class="navigationcomp">
    <a class="toggle close nav-close-icon" href="#"><img src="../images/close-circle.svg" alt="close icon"/></a>
    <div>
    <img class="nav-logo" style="min-width:270px; padding:15px; height:auto;" alt="Design System 42" src="../images/42-ph-logo.svg">
    </div>
<nav class="nav-effect">
<div class="ds42-nav-title">Design System Forty Two</div>
<router-link  to="/">DS 42 Overview</router-link>
<router-link  to="/resources">Resources</router-link>
<hr><div class="ds42-nav-title">Foundations</div>
<router-link  to="/foundations">Foundations Overview</router-link>
<router-link  to="/colors">Colors</router-link>
<router-link  to="/typography">Typography</router-link>
<hr><div class="ds42-nav-title">Components</div>
<router-link  to="/componentsoverview">Components Overview</router-link>
<router-link  to="/accordions">Accordions</router-link>
<router-link  to="/buttons">Buttons</router-link>
<router-link  to="/tables">Data Tables</router-link>
<router-link  to="/datepickers">Date Pickers</router-link>
<router-link  to="/formfields">Form Fields</router-link>
<router-link  to="/selection">Selection Controls</router-link>

</nav>
</div>
</template>
<script>
export default{
  name: 'navigationcomp',
  data () {
    return {
      title: 'navigationcomp'
    }
  }
}
</script>