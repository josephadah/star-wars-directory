<template>
  <div>
    <SearchForm @search-items="search" />
    <StarshipList :showingNumber="6" :showTitle="true" :query="query">
      <LoadMore path="/starships" />
    </StarshipList>
    <PlanetList :showingNumber="3" :showTitle="true" :query="query">
      <LoadMore path="/planets" />
    </PlanetList>
    <CharacterList :showingNumber="4" :showTitle="true" :query="query">
      <LoadMore path="/characters" />
    </CharacterList>
  </div>
</template>

<script>
// @ is an alias to /src
import StarshipList from "@/components/starships/StarshipList";
import PlanetList from "@/components/planets/PlanetList";
import CharacterList from "@/components/characters/CharacterList";
import LoadMore from "@/components/common/LoadMore";
import SearchForm from "@/components/common/SearchForm";

export default {
  name: "home",
  components: {
    StarshipList,
    PlanetList,
    CharacterList,
    LoadMore,
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
