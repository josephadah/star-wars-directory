<template>
  <div class="search-wrapper">
    <div class="row justify-content-center mt-5 search-form">
      <div class="col-12 col-md-7 text-center hero-overlay">
        <div class="d-inline-flex align-items-center pb-1 hero-heading">
          <img src="../../assets/images/logo.png" width="100" alt />
          <span class="h2 font-weight-bolder pl-3 text-white">Directory</span>
        </div>
        <p
          class="h5 text-light mt-4"
        >Find your favorite Characters, Films, Species, Starships, and Planets</p>
        <form @submit.prevent="search" class="mt-4">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text cursor-pointer" @click="search">
                  <i class="fas fa-search fa-2x pl-4 pr-3"></i>
                </div>
              </div>
              <input
                type="text"
                v-model="query"
                name="query"
                class="form-control form-control-lg"
                id="inlineFormInputGroupUsername"
                placeholder="Enter a search term and press enter"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      const searchQuery = this.query.toLowerCase().trim();
      this.$emit("search-items", searchQuery);
      this.query = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.search-wrapper {
  position: relative;
  .search-form {
    position: absolute;
    top: -25em;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .hero-overlay {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4) 10%);
    .hero-heading {
      border-bottom: 2px solid #fff;
    }
  }
}
</style>