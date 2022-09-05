<template>
<div class="topbanner">
    <h1 id="topbannercontent">
        The <span class="home">home</span> of body <span class="positive"> positive</span> fashion &#128293;
    </h1>
<h4 id="topbannercontent">
    FREE click and collect now at all our <span class="topstorename">Laeta</span> stores 	&#128512
</h4>
</div>
</template>

<script>
export default {
  name: 'topBanner',

}
</script>

<style>
/* the first banner on the page */
.topbanner{
    background-color: black;
}
/* the content on the top banner of the page */
#topbannercontent{
    color: antiquewhite;
    text-align: center;
}

/* The work 'positive' */
.positive, .home, .storename, .topstorename{
    color: palevioletred;
}
/* the word 'home' */

</style>