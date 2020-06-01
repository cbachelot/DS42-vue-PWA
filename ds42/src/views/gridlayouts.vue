<template>
<div>
  <div class="page-grid">
 <div class="page-overview yellow-gradient">
                    <div class="content-column-left">
                        <div>
                            <h2 class="black-text-overwrite">Grid Layouts</h2>

                            <p class="black-text-overwrite">The responsive layouts provided below adapt to device screen sizes, orientation and even specific browsers to ensure consistency across layouts.
                            </p>
                        </div>

                        <div>
                            <img alt="Typography Overview" class="overview-image" src="../images/layouts.svg">
                        </div>
                    </div>
                </div>  
              </div>
              <div class="main-container-layouts">
<fourcolgridcomp></fourcolgridcomp></div>
</div>
</template>
<script>

import fourcolgridcomp from '../components/fourcolgrid';

export default{
  name: 'gridlayouts',
   components: {
    fourcolgridcomp
  },  
  data () {
    return {
      title: 'gridlayouts'
    }
  }
}
</script>
<style scoped>

@import '../assets/ds-42.css';


/* Generic Classes for Demo */

.main-container-layouts {
padding: 30px;
}
.column-one {
    background-color: gray;
}

.column-two {
    background-color: gray;
}

.column-three {
    background-color: gray;
}

.column-four {
    background-color: gray;
}

.column-five {
    background-color: gray;
}

.column-six {
    background-color: gray;
}

</style>
