
  <template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="nav-link">Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/products/women" class="nav-link active" aria-current="page" href="#">Women</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products/kids" class="nav-link" href="#">kids</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-circle"></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/login" class="dropdown-item" href="#">Log in</router-link></li>
            <li><router-link to="/register" class="dropdown-item" href="#">Register</router-link></li>
            <li><hr class="dropdown-divider"></li>
          </ul>
        </li>
              <li class="nav-item">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i class="bi bi-cart"></i>
</button>
        </li>
      </ul>
      <h2 class="heading">Laeta</h2>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      return (this.$store.state.user = null);
    },
  },
};

</script>

<style>
  a:active {
  background-color: #34D399;
}

.navBar {
  position: sticky;
  top: 0;
}

.heading{
  padding-right: 16em;
  color: palevioletred;
  font-weight: bold;
}



</style>