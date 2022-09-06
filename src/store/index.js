import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    jwt: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products;
    },
    setProduct(state, product){
      state.product = product;
    },
    setUsers(state, users){
      state.users = users;
    },
    setUser(state, user){
      state.user = user;
    },
    setJwt(state, jwt){
      state.jwt = jwt;
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

login: async (context, payload) => {
    console.log(payload);
  fetch(`http://localhost:4000/login`, {
  // fetch(`https://laeta.herokuapp.com/login`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // let { user } = data;
      console.log(data);
      alert(`Welcome, ${data.results[0].user_fullname}`)
      // context.commit("setUser",data.results[0]);
      // context.commit("setUser", data.user);
    });
},
  },
  modules: {
  }
})
