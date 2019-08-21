<template>
  <div>
    <StarshipList :showingNumber="6" :showTitle="true">
      <LoadMore path="/starships" />
    </StarshipList>
    <PlanetList :showingNumber="3" :showTitle="true">
      <LoadMore path="/planets" />
    </PlanetList>
    <CharacterList :showingNumber="4" :showTitle="true">
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

export default {
  name: "home",
  components: {
    StarshipList,
    PlanetList,
    CharacterList,
    LoadMore
  }
};
</script>
