<template>
  <h6 class="shopcat">Shop by catergory</h6>

  <div class="container">
    <div class="row first" style="gap: 10px" id="category">
      <div class="col-md-3 first">
        <router-link to="/products/jeans">
          <img
            src="https://i.postimg.cc/Nj1ffjtk/Screenshot-2022-08-25-143516.png"
            class="img-fluid"
            alt="denim"
        /></router-link>
      </div>

      <div class="col-md-3 lingerie">
        <router-link to="/products/Lounge">
          <img
            src="https://i.postimg.cc/sgcqcMRX/Screenshot-2022-08-25-143827.png"
            class="img-fluid"
            alt=""
          />
        </router-link>
      </div>

      <div class="col-md-3 shoe">
        <router-link to="/products/bags">
          <img
            src="https://i.postimg.cc/DwncHYfy/Screenshot-2022-08-25-143926.png"
            class="img-fluid"
            alt=""
          />
        </router-link>
      </div>
    </div>

    <div class="row" style="gap: 15px" id="category">
      <div class="col-md-3">
        <router-link to="/products/dresses">
          <img
            src="https://i.postimg.cc/NjymNT1f/Screenshot-2022-08-25-143226.png"
            class="img-fluid"
            alt=""
          />
        </router-link>
      </div>

      <div class="col-md-3">
        <router-link to="/products/tops">
          <img
            src="https://i.postimg.cc/d3jpx3T4/Screenshot-2022-08-25-144541.png"
            class="img-fluid"
            alt=""
          />
        </router-link>
      </div>

      <div class="col-md-3">
        <router-link to="/products/jackets">
          <img
            src="https://i.postimg.cc/QMhYKh93/Screenshot-2022-08-25-143843.png"
            class="img-fluid"
            alt=""
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "landingCatergory"
};
</script>
<style scoped>
.shopcat {
  text-align: center;
}
.shoe {
  padding-left: 25px;
}
.lingerie {
  padding-left: 20px;
}
#category{
  justify-content: center;
}
</style>
