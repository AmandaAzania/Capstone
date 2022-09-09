<template>
    <div class="container">
      <form>
        <input type="text" v-model="user_fullname" placeholder="Full Name" />
        <input type="text" v-model="email" placeholder="email" />
        <input type="text" v-model="password" placeholder="passwor
        d" />
        <button type="button" @click="register">Register</button>
      </form>
      <div v-if="user"><p>You are successfully registred !!</p> <span>{{ user.name }} </span>
    
       <router-link to="/">
                    <button class="btn-grad2" type="submit">Shop our looks</button>
                    </router-link>
      
      </div>
    
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          user_fullname: "",
          email: "",
          password: "",
          userRole:"",
        };
      },
      computed: {
        user() {
          return this.$store.state.user;
        },
      },
      methods: {
        register() {
          this.$store.dispatch("register", {
            user_fullname: this.user_fullname,
            email: this.email,
            password: this.password,
            userRole: this.userRole
          });
        },
      },
    };
    </script>
    