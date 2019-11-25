<template>
    <div class="page-grid">

                <div class="page-overview purple-gradient">
                    <div class="content-column-left">
                            <div>
                                <h2>Date Pickers</h2>

                                    <p>Date pickers allow the user to input a date or a range of dates into our UI. An example of a single date picker is setting a specific  shipping schedule date in Connect or in checkout. An example  of using a date range would be during filtering of results by setting a specific date range. </p>
                            </div>

                            <div>
                                    <img class="overview-image" src="../images/calendar.svg" alt="Calendar Date Picker">
                            </div>

                    </div>
                </div>

                <div class="page-content">
                                <div>
                                <h2>Date Picker Types</h2>
                                <p>The most common date picker types are:</p>
                                </div>

                                <div class="content-column-two bottom-margin-zero">
                                    <div class="two-col-left">
                                    <h3 class="align-top">Mobile Date Picker</h3>
                                    <p>Mobile date pickers are used to select future or past dates on a mobile or tablet device. The user can swipe up and down to change months for ease of use while the days of the week and apply button will stay stationary.</p>
                                    </div>
                                    <div class="two-col-right ">
                                    <img src="../images/mobile-calendar-example.svg" alt="Mobile Calendar Example" />
                                    </div></div>
                                    <hr>
                                    <div class="content-column-two bottom-margin-zero ">
                                    <div class="two-col-left"><h3>Desktop Date Picker</h3>
                                    <p>Desktop date pickers are used to select a date or a range of dates into our desktop UI. On desktop we are able to show an expanded two pane view for quicker selection. Months can be changed by using the chevrons to the left and right.</p>
                                    </div>
                                    <div class="two-col-right">
                                    <img src="../images/desktop-calendar-example.svg" alt="Calendar Desktop Example"/>
                                    </div></div>
                                    <hr>
                                    <div class="content-column-two bottom-margin-zero ">
                                        <div class="two-col-left"><h3>Calendar Anatomy</h3>
                                            <p><b>1. Text field</b> - See <a href="ds-component-formfields.html">form field documentation for specs.</a><br>
                                                <b>2. Month and year</b> – 12px Verdana Regular font - Color: #2c2c2c<br>
                                                <b>3. Day of the week</b>- 10px Verdana Bold font - Color: #2c2c2c<br>
                                                <b>4. Disabled dates</b> - Color: #979797<br>
                                                <b>5. Current date</b> – Background color: #f4f4f4<br>
                                                <b>6. Navigation chevrons</b> – Active color: #979797 - Disabled color: #f4f4f4<br>
                                                <b>7. Hover state</b> – 1px outline: #008BAA<br>
                                                <b>8. Selected date</b> – Background color: #008BAA<br>
                                                <b>9. Clear button</b> – Clears out the selected date<br>
                                                <b>10. Apply button</b> – Will apply the date to the UI and close selection modal<br>
                                            </p>
                                        </div>
                                        <div class="two-col-right">
                                        <img src="../images/anatomy-calendar.svg" alt="Anatomy Calendar"/>
                                        </div></div>

                                        <hr>

                                        <div class="content-column-left">
                                            <div>

                                                <h3>Code</h3>
                                                <p>When applying any of the date pickers to the front end of an Allied product simply copy and paste the
                                                    html found here. You can also view the CSS to see how it works.</p>

                                            </div>
                                            <div>

                                                    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="cbachelot" data-slug-hash="QWLPMMr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Allied DatePicker">
                                                            <span>See the Pen <a href="https://codepen.io/cbachelot/pen/QWLPMMr">
                                                            Allied DatePicker</a> by Clark Bachelot (<a href="https://codepen.io/cbachelot">@cbachelot</a>)
                                                            on <a href="https://codepen.io">CodePen</a>.</span>
                                                          </p>
                                                          <script async type="application/javascript" src="https://static.codepen.io/assets/embed/ei.js"></script>

                                                </div>
                                        </div>
                                        </div>
                                    </div>

</template>

<script>
export default{
  name: 'datepickers',
  data () {
    return {
      title: 'datepickers'
    }
  }
}
</script>
