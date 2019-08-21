<template>
  <div>
    <SearchForm @search-items="search" />
    <StarshipList :showTitle="true" :query="query" />
  </div>
</template>

<script>
import StarshipList from "../components/starships/StarshipList";
import SearchForm from "../components/common/SearchForm";

export default {
  components: {
    StarshipList,
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