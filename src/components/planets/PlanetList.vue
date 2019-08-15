<template>
  <div>
    <div>
      <div>
        <p class="h2 font-weight-bold text-center text-muted mt-4">Popular Planets</p>
        <div style="border-bottom: 5px solid #555; max-width: 150px;" class="mx-auto"></div>
      </div>
      <div class="my-5">
        <div class="row">
          <div v-for="planet in planets" :key="planet.name" class="col-md-4">
            <PlanetItem :planet="planet" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPlanets } from "@/services/swapi.service";
import { addImages } from "@/utilities/helpers";
import PlanetItem from "@/components/planets/PlanetItem";

export default {
  name: "PlanetList",
  components: {
    PlanetItem
  },
  data() {
    return {
      planets: []
    };
  },
  mounted() {
    getPlanets().then(data => {
      const planets = data.results.slice(0, 3);
      console.log(planets);
      this.planets = addImages(planets, "planet", 3);
    });
  }
};
</script>