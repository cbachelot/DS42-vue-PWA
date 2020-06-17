<template>
 <div class="colors">
  <div class="page-grid">

                <div class="page-overview green-gradient">
                    <div class="content-column-left">
                        <div>
                            <h2>Imagery</h2>

                            <p>Imagery can be a powerful tool in enhancing the overall user experience, visual aesthetic, and providing context to messaging that is difficult to explain.</p>
                        </div>

                        <div>
                            <img alt="Colors Overview" class="overview-image" src="../images/imagery.svg">
                        </div>
                    </div>
                </div>
                <div class="page-content">
                      <h3 class="align-top">Usage</h3>
                                <p>When selecting and image keep in mind it’s ability to convey your message, enhance the user’s experience and reflect the Allied brand well. There are many different variations of imagery that can be used to accomplish this from photos, icons, illustrations or diagrams and all of these can work well together to tell your story. 
                                </p>

                        <h4>Have a Focal Point</h4>
                                    <p>Having a focal point on images is extremely important as things can be cropped in awkward spots and then the photo loses its meaning or context it was trying to convey. </p>
 <div class="content-column-two bottom-margin-zero">
                                    <div class="two-col-left">
                                        <img src="../images/image-correct.jpg" alt="Correct Image Example" />
                                        <div class="icon-width">
                                         <img src="../images/checkmark.svg" alt="Correct Image Example" /> Correct Example
                                         </div>
                                    </div>
                                    <div class="two-col-right ">
                                    <img src="../images/image-incorrect.jpg" alt="Incorrect Image Example" />
                                     <div class="icon-width">
                                         <img src="../images/x.svg" alt="Correct Image Example" /> Incorrect Example
                                         </div>
                                    </div></div>
                                  
                                     <h4>Size Appropriately</h4>
                                    <p>Luckily, Cloudinary will handle compression for us. However, it’s important that the image you are uploading has the appropriate resolution. A general rule is to export the lowest file size without compromising the image quality. </p>
 <div class="content-column-two bottom-margin-zero">
                                    <div class="two-col-left">
                                        <img src="../images/image-right-qlty.jpg" alt="Correct Image Example" />
                                        <div class="icon-width">
                                         <img src="../images/checkmark.svg" alt="Correct Image Example" /> Correct Example
                                         </div>
                                    </div>
                                    <div class="two-col-right ">
                                    <img src="../images/image-pixelated.jpg" alt="Incorrect Pixelated Image Example" />
                                     <div class="icon-width">
                                         <img src="../images/x.svg" alt="Correct Image Example" /> Incorrect Example
                                         </div>
                                    </div></div>

                                     <h4>Accessibility</h4>
                                    <p>Accessibility I very important, imagery should always have an alternative text. (a.k.a. alt tag) or a caption to be read by screen readers for visually impaired users. Alternative text is also plays a role in SEO and without it we would be penalized. </p>
 <div class="content-column-two bottom-margin-zero">
                                    </div>
                                    <hr>
                                     <h3 class="align-top">Creating a Cloudinary Link</h3>
                                <p>It is important that when we upload an image to Cloudinary that we use the proper settings so it creates the proper URL for us to use. Letting Cloudinary decide how much compression to use and which format to serve helps a great deal in overall performance of our website. Below are detailed instructions on the proper way to create a cloudinary URL. 
                                </p>

 <div class="content-column-two-3-4 bottom-margin-zero">
                                    <div class="two-col-left">
                                     <h4>Step 1: Cloudinary Default View</h4>
                                    <p>This is the default view for a Cloudinary image. The section we are going to focus on for creating the URL is the Form and Shape section. As you notice by default format is set to keep format and quality is set to manual. We are going to change those to auto.</p>
                                    </div>
                                    <div class="two-col-right">
                                    <img src="../images/cloudinary-1.jpg" alt="Cloudinary Step 1" />
                                    </div></div>
                                     <div class="content-column-two-3-4 bottom-margin-zero">
                                     <div class="two-col-left">
                                     <h4>Step 2: Changing the format setting.</h4>
                                    <p>Next change the format type in the dropdown from it's default selection to the auto setting. This will allow Cloudinary to decide which format is best suited for the browswer being used. It will also add the needed f_auto tag to the URL. </p>
                                    </div>
                                    <div class="two-col-right">
                                    <img src="../images/cloudinary-4.jpg" alt="Cloudinary Step 2" />
                                    </div></div>
                                     <div class="content-column-two-3-4 bottom-margin-zero">
                                     <div class="two-col-left">
                                     <h4>Step 3: Changing the quality setting.</h4>
                                    <p>Next change the quality setting in the dropdown from it's default selection to the auto setting. This will allow Cloudinary to decide how much compression is needed to serve the best quality image based on the users device and connection speed. It will also add the needed q_auto tag to the URL. </p>
                                    </div>
                                    <div class="two-col-right">
                                    <img src="../images/cloudinary-2.jpg" alt="Cloudinary Step 3" />
                                    </div></div>
                                     <div class="content-column-two-3-4 bottom-margin-zero">
                                     <div class="two-col-left">
                                     <h4>Step 4: Copy the final generated link</h4>
                                    <p>The last step is to simply copy the generated link with all the format and quality tags that should be now embedded into the URL. Here is an example of what it should look like if all the setting were set correctly. You'll notice in orange that there is now the f_auto and q_auto tags within the URL.  </p>
                                    </div>
                                    <div class="two-col-right">
                                    <img src="../images/cloudinary-3.jpg" alt="Cloudinary Step 4" />
                                    </div></div>
                                    

                                      
                       
                </div>
            </div>
</div>
</template>
<script>
export default{
  name: 'images',
  data () {
    return {
      title: 'images'
    }
  }
}
</script>
<style scoped>
.icon-width img {
max-width: 25px;
vertical-align: top;
display: inline;
}

.content-column-two img {
    margin-bottom: 10px;
}
</style>
