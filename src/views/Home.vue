<template>
  <div>
    <StarshipList :showFew="true">
      <LoadMore path="/starships" />
    </StarshipList>
    <PlanetList :showFew="true">
      <LoadMore path="/planets" />
    </PlanetList>
    <CharacterList :showFew="true">
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
