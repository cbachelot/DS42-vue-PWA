<template>
  <div id="app">

<div class="ds42-main-grid">
    <a class="toggle open" href="#ds42-nav"><img src="./images/menu.svg" alt="menu icon"/></a>
    <div id="ds42-nav">
  <navigationcomp></navigationcomp>
  </div>

  <div class="ds42-body">
  <transition name="moveInUp">
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
  }
}
</script>

<style>

@import './assets/ds-42.css';

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

#app {
}
</style>
