<template>
   
    <div class="container">
      <div class="row">
      
        <div class="col-md">
          <router-link to="/products/add">
            <button class="btn btn-primary">Add Product</button>
          </router-link>
        </div>
      </div>
      
      <h2 class="display-2">Products </h2>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead class="bg-gradient">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
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
                <!-- <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button> -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                          :data-bs-target="'#update'+product.productId">
                          <i class="fas fa-edit"></i>
                      </button>
                <!-- <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button> -->
                <button id="delete" class="btn btn-danger" @click="deleteProduct(product.id)">
                  <i class="far fa-trash-alt"></i>
                          </button>
              <!-- <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button> -->
              </td>
            </tr>
          </tbody>
        </table>      
      </div>
  <!-- Modal -->
      <div v-for="product in products" :key="product">
          <div class="modal fade" :id="'update'+product.productId" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <input type="text" v-model="product.title">
                          <input type="text" v-model="product.category">
                          <input type="text" v-model="product.type">
                          <input type="text" v-model="product.description">
                          <input type="text" v-model="product.imgURL">
                          <input type="text" v-model="product.price">
                          <input type="text" v-model="product.created_by">
    
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary"
                              @click="this.$store.dispatch('update', product)">Save changes</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
      computed:{
          products(){
              return this.$store.state.products;
          },
     
      },
      mounted(){
          this.$store.dispatch("getProducts");
     
      },
  
      methods: {
          editProduct() {
              return this.$store.dispatch("update", this.product);
          },
          deleteProduct(id) {
              console.log("Product was deleted");
              return this.$store.dispatch("delete", id);
          }
      }
  
  
  }
  </script>
  
  <style>
   
    </style>