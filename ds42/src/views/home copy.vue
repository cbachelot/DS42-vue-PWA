<template>
  <div class="home">
<div class="page-grid">
<div class="page-overview blue-gradient">
          <div>
          <h2>Design System 42</h2>
          <p>The ultimate answer to a consistent and scalable design language, user experience, and digital identity is... Design System 42.</p>
          <p>We challenge ourselves every day to make consistent, useful products that help make our users lives better. We acknowledge that this is a continually moving goal that we must adapt to over time, and we accept this challenge as a way to strive to be better tomorrow than we are today.</p>
          </div>
    </div>
<div class="page-content">

    <h1>Getting Started</h1>

<div class="four-column-layout">
           <router-link  to="/foundations">
              <div class="overview-section-cta">
                  <img alt="Foundations Overview" src="../images/foundations-graphic.svg">
                  <h4>Foundations</h4>
                  <p class="overview-section-desc">The guidelines and usage of the basic building blocks of DS42.</p>
              </div>
          </router-link>
         <router-link  to="/componentsoverview">
          <div class="overview-section-cta">
              <img alt="Components Overview" src="../images/components-graphic.svg">
              <h4>Components</h4>
              <p class="overview-section-desc">A collection of DS42 components including code and guidelines.</p>
          </div>
        </router-link>
        <router-link  to="/resources">
            <div class="overview-section-cta">
                <img alt="Resources" src="../images/resources-graphic.svg">
                <h4>Resources</h4>
                <p class="overview-section-desc">Download fonts, icon packs, design kits, etc.</p>
            </div>
          </router-link>
      </div>

</div>
</div>
</div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
