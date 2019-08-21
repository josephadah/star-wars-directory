<template>
  <header
    class="container-fluid"
    :style="{backgroundImage: 'url(' + require(`../../assets/images/${headerImage}`) + ')'}"
  >
    <nav class="navbar">
      <router-link class="navbar-brand overlay-light p-2 cursor-pointer" to="/">
        <img src="../../assets/images/logo.png" width="100" alt />
      </router-link>
      <router-link class="nav-link text-white p-2 overlay-light" to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      query: ""
    };
  },
  computed: {
    ...mapState(["headerImage", "showSearch"])
  },
  methods: {
    ...mapMutations(["CHANGE_SEARCH_QUERY"]),
    search() {
      const searchQuery = this.query.trim().toLowerCase();
      if (searchQuery) {
        this.CHANGE_SEARCH_QUERY(searchQuery);
        this.query = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 450px;

  .overlay-light {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3));
  }
}
</style>
