<template>
  <div>
    <SearchForm @search-items="search" />
    <PlanetList :showTitle="true" :query="query" />
  </div>
</template>

<script>
import PlanetList from "../components/planets/PlanetList";
import SearchForm from "../components/common/SearchForm";

export default {
  components: {
    PlanetList,
    SearchForm
  },
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search(query) {
      this.query = query;
    }
  }
};
</script>