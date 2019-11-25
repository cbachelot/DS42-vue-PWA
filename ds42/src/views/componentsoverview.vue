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

                    <div class="four-column-layout">

                            <router-link  to="/accordions">
                                    <div class="overview-section-cta">
                                        <img alt="Accordian" src="../images/accordion-preview.svg">
                                        <h4>Accordions</h4>
                                        <p class="overview-section-desc">Accordions allow the user to expance and collapse large amount of content.</p>
                                    </div>
                                </router-link>

                       <router-link  to="/buttons">
                            <div class="overview-section-cta">
                                <img alt="Buttons" src="../images/buttons-preview.svg">
                                <h4>Buttons</h4>
                                <p class="overview-section-desc">Buttons communicate the action that will occur when the
                                    user touches them.</p>
                            </div>
                        </router-link>

                        <router-link  to="/tables">
                                <div class="overview-section-cta">
                                    <img alt="Tables" src="../images/data-tables-preview.svg">
                                    <h4>Data Tables</h4>
                                    <p class="overview-section-desc">Datatables allow the user to scan and digest large amounts of data quickly.</p>
                                </div>
                        </router-link>

                            <router-link  to="/datepickers">
                                    <div class="overview-section-cta">
                                        <img alt="Date Picker" src="../images/date-picker-preview.svg">
                                        <h4>Date Pickers</h4>
                                        <p class="overview-section-desc">Date Pickers allow the user to input a date or a range of dates into our UI.</p>
                                    </div>
                                </router-link>

                        <router-link  to="/formfields">
                            <div class="overview-section-cta">
                                <img alt="Forms" src="../images/forms-preview.svg">
                                <h4>Form Fields</h4>
                                <p class="overview-section-desc">Form fields allow the user to input data into our UI.</p>
                            </div>
                        </router-link>

                        <router-link  to="/selection">
                            <div class="overview-section-cta">
                                <img alt="Selection Controls" src="../images/selection-controls-preview.svg">
                                <h4>Selection Controls</h4>
                                <p class="overview-section-desc">Selection controls allow users to complete tasks that involve making choices.</p>
                            </div>
                        </router-link>

                    </div>

                </div>
            </div>

</template>

<script>
export default{
  name: 'componentsoverview',
  data () {
    return {
      title: 'componentsoverview'
    }
  }
}
</script>
