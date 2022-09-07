import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    jwt: null,
    cart : null
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
    },
    setCart(state, cart) {
      state.cart = cart;
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
  fetch(`https://laeta.herokuapp.com/login`, {
 
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let {results} = data;
      context.commit('setUser', results[0]);
      context.commit('setCart', results[0].cart);

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

getcart: async (context, user_id) => {
  id = context.state.user.user_id
  // console.log(id);
  await fetch("https://laeta.herokuapp.com/users" + user_id + "/cart", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.token,
      },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data != null) {
        context.state.cart = (data);
      } else {
        context.state.cart = null;
      }
    });
},
addCart: async (context, item, id) => {
  id = context.state.user.user_id;
  console.log(item);
  await fetch("https://laeta.herokuapp.com/users" + id + "/cart", {
      method: "POST",
      body: JSON.stringify(item),
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
  await fetch("https://laeta.herokuapp.com/users" + id + "/cart", {
      method: "DELETE",
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
deleteCart: async (context, list, id) => {
  id = context.state.user.user_id;
  console.log(list);
  await fetch(
      "https://laeta.herokuapp.com/users" + id + "/cart/" + list.cart_id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      context.dispatch("getcart");
    });
},
},


  }
)
