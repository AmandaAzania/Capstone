<template>
    <div>
      <div class="container" style="padding-top: 20vh">
  
      <div class="row">
        <div id="holder" class="col-sm-12 col-md-6 col-lg-4"  v-for="product in products" :key="product">
  
        <div class="card"  style=" border: none; border-radius: none; margin: 20px; ">
            <img id="prodImg" :src="product.imgURL" class="card-img-top img-fluid" style="width: 25rem; height: 25rem" />
        </div>
  
  <p id="prodTitle" style="color: red; display: flex; justify-content: center;">{{product.description}}</p>
  <p id="prodTitle" style="color: red; display: flex; justify-content: center;">R{{product.price}}</p>
        </div>
      </div>
  
      </div>
    </div>
  </template>
<script>
export default{
computed:{
products(){
    return this.$store.state.products;
}
},
mounted(){
    this.$store.dispatch("getProductByCat", this.$route.params.jeans);
}
}
</script>
<style scoped>
.denim{
    min-height: 100vh;
    padding-top: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: column;
}
</style>