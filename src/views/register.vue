<template>
    <div class="container">
      <form>
        <input type="text" v-model="user_fullname" placeholder="Full Name" />
        <input type="text" v-model="email" placeholder="email" />
        <input type="text" v-model="password" placeholder="password" />
        <input type="number" v-model="number" placeholder="phone number" />
        <button type="button" @click="register">Register</button>
      </form>
      <div v-if="user"><p>You are successfully registred !!</p> <span>{{ user.name }} </span>
    
       <router-link to="/login">
                    <button class="btn-grad2" type="submit">Log In</button>
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
          phone_number:""
        };
      },
      computed: {
        user() {
          return this.$store.state.user;
        },
      },
      methods: {
        register() {
          this.$store.dispatch('register', {
            user_fullname: this.user_fullname,
            email: this.email,
            password: this.password,
            userRole: this.userRole,
            phone_number: this.phone_number
          });
        },
      },
    };
    </script>
    