<template>
  <div>
    <div>
      <div>
        <p class="h2 font-weight-bold text-center text-muted mt-4">Popular Starships</p>
        <div style="border-bottom: 5px solid #555; max-width: 150px;" class="mx-auto"></div>
      </div>
      <div class="my-5">
        <div class="row">
          <div v-for="starship in starships" :key="starship.name" class="col-md-4">
            <StarshipItem :starship="starship" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStarships } from "@/services/swapi.service";
import { addImages } from "@/utilities/helpers";
import StarshipItem from "@/components/starships/StarshipItem";

export default {
  name: "StarshipList",
  components: {
    StarshipItem
  },
  data() {
    return {
      starships: []
    };
  },
  mounted() {
    getStarships().then(data => {
      const starships = data.results.slice(0, 6);
      console.log(starships);
      this.starships = addImages(starships, "starship", 6);
    });
  }
};
</script>