<template>
  <div>
    <SearchForm @search-items="search" />
    <CharacterList :showTitle="true" :query="query" />
  </div>
</template>

<script>
import CharacterList from "../components/characters/CharacterList";
import SearchForm from "../components/common/SearchForm";

export default {
  components: {
    CharacterList,
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