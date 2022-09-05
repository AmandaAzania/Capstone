<template>
    <div class="container">
         <h2 class="display-2">Dresses</h2>
         <div class="row">
         
         </div>
    </div>
</template>

<script>
    export default {
        computed:{
            products(){
                return this.$store.state.products
            }
        },
        mounted(){
            this.$store.dispatch("getProductByCat", this.$route.params.dresses);
        }
    }
</script>

<style lang="scss" scoped>

</style>