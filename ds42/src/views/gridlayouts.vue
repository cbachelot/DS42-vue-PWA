<template>
<div>
<div class="main-container-layouts"><h1>Grid Layouts</h1><fourcolgridcomp></fourcolgridcomp></div>
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
