<template>
  <div id="Login">
    <form id="LoginForm" @submit.prevent="login">
      <div id="LoginFormTitle">
        <h3>LOGIN</h3>
      </div>
      <div>
        <label for="" class="fw-light">EMAIL</label>
        <br />
        <input v-model="email" type="email" required />
      </div>

      <br />

      <div>
        <label for="" class="fw-light">PASSWORD</label>
        <br />
        <input v-model="password" type="password" required />
      </div>

      <div>
        <button type="button" @click="login" style="width: 100%">LOGIN</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  // computed:{
  //   user(){
  //     return this.$store.state.user;
  //   }
  // },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", payload);
    },
  },
};
</script>

<style scoped></style>
