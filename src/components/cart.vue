<template>
    <div class="container" id="Cart">
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

            <div class="modal-dialog">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5 class="modal-title" id="exampleModalLabel">
                            Cart
                        </h5>

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>
                    <div class="modal-body">
                        <div v-if="cart">
                            <div v-for="product in cart" :key="product.product_Id" class="card">
                                <img id="productimg" :src="product.imgURL" />
                                <div class="card-body">
                                    <h2>{{ product.tittle }}</h2>
                                    <p>{{ product.description }}</p>
                                    <p id="price">Price: R{{ product.price }}</p>
                                    <button @click="deleteCartById(product.cart_id)">Remove Product</button>
                                </div>
                                <div class="card-footer">
                                    <button @click="this.$store.dispatch('clearCart')">Clear Cart</button>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <p>Your cart is empty</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#Cart{
    text-align: center;
}
</style>

<script>
export default {
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        deleteCartById(id, list) {
            this.$store.dispatch('deleteCart', id);
            console.log(this.user);
        }
    }
};

</script>