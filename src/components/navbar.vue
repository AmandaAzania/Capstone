<template>
<div class="container-fluid">
    <div class="d-flex flex-row justify-content-center">
<p>FREE standard shipping on orders over R1000</p>      
    </div>
</div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/products/women" class="nav-link" href="#">WOMEN</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/products/plussize" class="nav-link active" aria-current="page" href="#">CURVE+SIZE</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products/kids" class="nav-link" href="#">KIDS</router-link>
        </li>
            <li class="nav-item">
          <router-link to="/products/men" class="nav-link" href="#">MEN</router-link>
        </li>

            <li class="nav-item">
          <router-link to="/products/beauty" class="nav-link" href="#">BEAUTY</router-link>
        </li>
 
      </ul>

           <router-link to="/"><h1 class="storename">Laeta</h1></router-link> 
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>


      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-90">
                <li class="nav-item">
          <router-link to="/login">
            <button class="btn">
                <i id="user" class="bi bi-person" style="font-size: 30px;"></i>
              </button>
                </router-link>
        </li>

                  <li class="nav-item">
          <a class="nav-link" href="#">
            <button class="btn">
               <i class="bi bi-cart" style="font-size: 30px;"></i>
              </button>
                </a>
        </li>

                  <li class="nav-item">
          <a class="nav-link" href="#">
            <button class="btn">
            <i id="heart" class="bi bi-suit-heart" style="font-size: 30px;"></i>
              </button>
                </a>
        </li>

        
        <li class="nav-item">
          <router-link to="/admin">ADMIN</router-link>
         
        </li>
      </ul>
    </div>

    
  </div>
</nav>



</template>
<script>
export default {
  name: 'navbar',

}
</script>

<style scoped>
.storename{
  margin-right: 190px;
}
#user{
  position: absolute;
  top:25%;
}

#heart{
  position: absolute;
  right: 15%;
  top:25%;
}
</style>
