import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    users: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products;
    },
    setProduct(state, product){
      state.product = product;
    }
  },
  actions: {
    async getProducts(context) {
      fetch('https://laeta.herokuapp.com/products')
        .then((res) => res.json())
        .then((data) => context.commit('setProducts', data.products));
    },
    async getProduct(context, id) {
      fetch('https://laeta.herokuapp.com/products/' + id)
        .then((res) => res.json())
        .then((data) => context.commit('setProduct', data.results[0]))
},
async getProductByCat(context, catergory) {
  fetch('https://laeta.herokuapp.com/productCategory/' + catergory)
    .then((res) => res.json())
    
    .then((data) =>
     context.commit('setProducts', data.results))
},
  },
  modules: {
  }
})
