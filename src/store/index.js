import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    jwt: null,
    cart : null,
    message: null
  },
  getters: {
    getUser(state) {
      return state.user;
    }
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
    },
    setCart(state, cart) {
      state.cart = cart;
    },
    setMessage(state, value) {
      state.message = value;
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
  fetch(`https://laeta.herokuapp.com/login`, {
 
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      context.commit('setUser', data.results[0]);
      console.log(context.state.user.user_id);
      context.dispatch('getcart', context.state.user.user_id);
    });
},

register: async (context, payload) => {
  const {user_fullname, email, password } = payload;
  await fetch("https://laeta.herokuapp.com/register", {
    method: "POST",
    body: JSON.stringify({
      user_fullname: user_fullname,
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => context.commit("setUser", json));
  // router.push({ name: "login" });
},

getcart: async (context, id) => {
  // id = context.state.user.user_id
  // console.log(id);
  await fetch("https://laeta.herokuapp.com/users/" + id + "/cart", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data != null) {
        context.commit('setCart', data.results);
      } 
      else {
        context.commit('setMessage', 'No cart for now');
      }
    });
},
addCart: async (context, product, id) => {
  id = context.state.user.user_id;
  console.log(product);
  await fetch("https://laeta.herokuapp.com/users" + id + "/cart", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.token,
      },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      context.dispatch("getcart");
    });
},
clearCart: async (context, id) => {
  id = context.state.user.user_id;
  await fetch("https://laeta.herokuapp.com/users/" + id + "/cart", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);   
      context.dispatch("getcart", id);
    });
},
deleteCart: async (context, id) => {
  let user = context.state.user.user_id
  await fetch(
      "https://laeta.herokuapp.com/users/" + user + "/cart/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      context.dispatch("getcart", user);
    });
},
},
modules: {}

},

)
