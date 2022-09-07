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
                        <div v-if="Cart">
                            <div v-for="item in Cart" :key="product.product_id" class="card">
                                <img id="productimg" :src="product.imgURL" />
                                <div class="card-body">
                                    <h2>{{ product.tittle }}</h2>
                                    <p>{{ product.description }}</p>
                                    <p id="price">Price: R{{ item.Price }}</p>
                                    <button @click="this.$store.dispatch('deleteCart', item)">Remove Product</button>
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
    props: ["cart"],
    computed: {
        Cart() {
            return this.$store.state.cart;
        },
    },
};

</script>