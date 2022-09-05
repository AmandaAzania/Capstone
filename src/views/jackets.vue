<template>
    <div>

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
            this.$store.dispatch("getProductByCat", this.$route.params.jackets);
        }
    }
</script>

<style lang="scss" scoped>

</style>