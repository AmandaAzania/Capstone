<template>
  <div class="container footer">
    <div class="row">
      <div class="col-md-3">
        <p id="big">Company info</p>
        <p id="small">About Laeta</p>
        <p id="small">Affiliate</p>
        <p id="small">Fashion blooger</p>
      </div>
      <div class="col-md-3">
        <p id="big">help and support</p>
        <p id="small">Shipping info</p>
        <p id="small">Returns</p>
        <p id="small">How to order</p>
        <p id="small">How to track</p>
        <p id="small">Size guide</p>
        <p id="small">Social responisbility</p>
        <p id="small">Laeta VIP</p>
      </div>

      <div class="col-md-3">
        <p id="big">Customer care</p>
        <p id="small">Contact us</p>
        <p id="small">Payment method</p>
        <p id="small">Bonus points</p>
      </div>
      <div class="col-md-3">
        <p id="big">find us on</p>
        <div class="col-md-8">
          <a href="">
            <i class="fa-brands fa-pinterest mx-1"></i>
          </a>
          <a href="">
            <i class="bi bi-facebook mx-1"></i>
          </a>
          <a href="">
            <i class="bi bi-instagram mx-1"></i>
          </a>
          <a href="">
            <i class="bi bi-twitter mx-1"></i>
          </a>

          <a href="">
            <i class="bi bi-youtube mx-1"></i>
          </a>
        </div>
        
<form action="/action_page.php">
  <label for="fname">sign up for our news letter:</label><br>
  <input type="text" id="fname" name="fname" value="email"><br>
  <input type="submit" value="Submit">
</form> 
      </div>
      &copy; 2022

      
       
    </div>
  </div>
</template>
<script>
export default {
  name: "footer",
};
</script>
<style>
#big {
  font-size: 12px;
  font-weight: bold;
}
#small {
  font-size: 10px;
}
.bi-youtube {
  color: red;
}
.bi-instagram {
  color: orangered;
}
.bi-twitter {
  color: rgb(0, 170, 255);
}
.fa-pinterest {
  color: red;
}
.footer{
    height: 100px;
    bottom: 0;
    width: 100%;
}
</style>
