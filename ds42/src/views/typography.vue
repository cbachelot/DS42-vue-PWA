<template>
<div class="typography">
 <div class="page-grid">

                <div class="page-overview yellow-gradient">
                    <div class="content-column-left">
                        <div>
                            <h2 class="black-text-overwrite">Typography</h2>

                            <p class="black-text-overwrite">Good typography is important for our brand, which cherishes craftsmanship
                                and quality. Our fonts were chosen for their distinctiveness. Using a
                                modern design system we need to make sure our typography is consistent
                                across all pages.
                            </p>
                        </div>

                        <div>
                            <img alt="Typography Overview" class="overview-image" src="../images/typography-overview.svg">
                        </div>

                    </div>
                </div>

                <div class="page-content">

                        <div class="content-column-left">
                            <div>

                                <h3 class="align-top">Typeface</h3>
                                <p>Our primary typeface is Lato found in the <a target="_blank" href="https://fonts.google.com/specimen/Lato">Google Fonts Library</a>.</p>

                                <p>Lato is a sans serif typeface family started in the summer of 2010 by Warsaw-based designer Łukasz Dziedzic (“Lato” means “Summer” in Polish). In December 2010 the Lato family was published under the Open Font License by his foundry tyPoland, with support from Google.</p>

                                <p><a target="_blank" href="./fonts/Lato.zip"><img class="icon ico-link" src="../images/icons/Export-Black.svg"/>Download Lato</a></p>

                                <p><strong>How to call our font family:</strong>
                                <br>font-family: lato, verdana, arial, san-serif;</p>
                            </div>

                            <div class="typ-cont-layout">

                                    <h1 class="allied-h1">
                                        h1
                                    </h1>
                                    <p>
                                        <strong>Mobile:</strong>
                                    <br>
                                        font-size: 20px;
                                        <br>
                                        font-weight: bold;
                                        <br>
                                        color: $allied_black_l;
                                        <br>
                                        line-height: 22px;
                                    </p>

                                    <p>
                                        <strong>Desktop:</strong>
                                        <br>
                                        font-size: 22px;
                                        <br>
                                        line-height: 24px;
                                    </p>

                                    <h2 class="allied-h2">
                                        h2
                                    </h2>
                                    <p>
                                        <strong>Mobile:</strong>
                                        <br>
                                        font-size: 18px;
                                        <br>
                                        line-height: 22px;
                                    </p>

                                    <p>
                                        <strong>Desktop:</strong>
                                        <br>
                                        font-size: 20px;
                                        <br>
                                        line-height: 24px;
                                    </p>

                                    <h3 class="allied-h3">
                                        h3
                                    </h3>
                                    <p>
                                        <strong>Mobile:</strong>
                                        <br>
                                        font-size: 13px;
                                        <br>
                                        font-weight: bold;
                                        <br>
                                        line-height: 16px;
                                    </p>

                                    <p>
                                        <strong>Desktop:</strong>
                                        <br>
                                        font-size: 16px;
                                        <br>
                                        line-height: 17px;
                                        <br>
                                        font-weight: bold;
                                    </p>

                                    <p class="allied-p">P</p>
                                    <p>
                                        <strong>Mobile:</strong>
                                        <br>
                                        font-size: 13px;
                                        <br>
                                        line-height: 20px;
                                    </p>
                                    <p>
                                        <strong>Desktop:</strong>
                                        <br>
                                        font-size: 16px;
                                        <br>
                                        line-height: 22px;
                                    </p>

                                    <p>
                                        <a class="allied-a" href="#">a:link:</a>
                                    </p>

                                    <p>
                                        <strong>Mobile:</strong>
                                        <br>
                                        color: $allied_blue_d;
                                        <br>
                                        text-decoration: none;
                                        <br>
                                        font-size: 13px;
                                    </p>
                                    <p>
                                        <strong>Desktop:</strong>
                                        <br>
                                        font-size: 14px;
                                    </p>

                            </div>
                        </div>

                </div>
            </div>
        </div>
</template>
<script>
export default{
  name: 'typography',
  data () {
    return {
      title: 'typography'
    }
  }
}
</script>
