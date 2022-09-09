<template>
    <div>
        <div class="table-responsive">
  <table class="table">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody v-if="products">
          <tr v-for="product in products" :key="product" :product="product">
            <td data-title="ID">{{product.productId}}</td>
            <td data-title="Name">{{product.title}}</td>
            <td data-title="Image">
              <img  style="width: 5rem" :src="product.imgURL" :alt="product.Title"/>
            </td>
            <td data-title="Quantity">{{product.quantity}}</td>
            <td data-title="Price">R {{product.price}}</td>
            <td data-title="Created By">{{product.createdBy}}</td>
            <td>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        :data-bs-target="'#update'+album.id">
                        Launch demo modal
                    </button>
              <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
          </tr>
        </tbody>
</table>
</div>
    </div>
</template>

<script>
export default {
    computed:{
        products(){
            return this.$store.state.products;
        },
    users(){
    return this.$store.state.users;
   }
    },
    mounted(){
        this.$store.dispatch("getProducts");
        this.$store.dispatch("getUsers");
    }

}
</script>

<style lang="scss" scoped>

</style>