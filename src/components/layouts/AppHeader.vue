<template>
  <header
    class="container-fluid"
    :style="{backgroundImage: 'url(' + require(`../../assets/images/${headerImage}`) + ')'}"
  >
    <nav class="navbar">
      <router-link class="navbar-brand" to="/">
        <img src="../../assets/images/logo.png" width="100" alt />
      </router-link>
      <router-link class="nav-link text-white" to="/about">About</router-link>
    </nav>

    <div class="row justify-content-center mt-5">
      <div class="col-12 col-md-6 text-center hero-overlay">
        <div class="d-inline-flex align-items-center pb-1 hero-heading">
          <img src="../../assets/images/logo.png" width="100" alt />
          <span class="h2 font-weight-bolder pl-3 text-white">Directory</span>
        </div>
        <p
          class="h5 text-light mt-4"
        >Find your favorite Characters, Films, Species, Starships, and Planets</p>
        <form class="mt-4">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fas fa-search fa-2x pl-4 pr-3"></i>
                </div>
              </div>
              <input
                type="text"
                class="form-control form-control-lg"
                id="inlineFormInputGroupUsername"
                placeholder="Enter a search term"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["headerImage"])
  }
};
</script>

<style lang="scss" scoped>
header {
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  //   url("../../assets/images/hero-banner.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 450px;

  .hero-heading {
    border-bottom: 2px solid #fff;
  }

  .hero-overlay {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 20%);
  }
}
</style>
