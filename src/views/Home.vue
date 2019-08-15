<template>
  <div>
    <StarshipList />
    <PlanetList />
    <CharacterList />
  </div>
</template>

<script>
// @ is an alias to /src
import StarshipList from "@/components/starships/StarshipList";
import PlanetList from "@/components/planets/PlanetList";
import CharacterList from "@/components/characters/CharacterList";

export default {
  name: "home",
  components: {
    StarshipList,
    PlanetList,
    CharacterList
  }
};
</script>
