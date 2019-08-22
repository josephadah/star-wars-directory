<template>
  <div>
    <div class="row justify-content-center">
      <div v-if="planet" class="col-9 mt-4 mb-5 pb-5">
        <div class="d-inline-block">
          <div class="floating-title d-flex align-items-center p-3">
            <div class="left-block mr-4"></div>
            <h3 class="text-white">{{ planet.name }}</h3>
            <div class="right-block ml-4"></div>
          </div>
        </div>
        <h3 class="mt-1 mb-4">{{ planet.name }}</h3>
        <div>
          <div class="mb-2">
            <strong class="pr-2">Climate:</strong>
            <em>{{ planet.climate }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Population:</strong>
            <em>{{ planet.population }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Terrain:</strong>
            <em>{{ planet.terrain }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Diameter:</strong>
            <em>{{ planet.diameter }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Rotation period:</strong>
            <em>{{ planet.rotation_period }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Gravity:</strong>
            <em>{{ planet.gravity }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Surface water:</strong>
            <em>{{ planet.surface_water }}</em>
          </div>
        </div>
      </div>
    </div>
    <ItemDetailsLoader :columnsCount="2" v-if="!planet" />
    <div v-if="planet">
      <div class="text-center">
        <div class="border-bottom pb-2 mb-3">
          <h3 class="pl-4 pr-4 pb-2 pt-2 border d-inline-block">Recently viewed Planets</h3>
        </div>
        <PlanetList :showingNumber="2" :exceptName="planet.name" :showTitle="false" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getPlanet } from "../services/swapi.service";
import ItemDetailsLoader from "../components/common/ItemDetailsLoader";
import PlanetList from "../components/planets/PlanetList";

export default {
  components: {
    ItemDetailsLoader,
    PlanetList
  },
  data() {
    return {
      planet: {},
      imageUrl: ""
    };
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) {
      getPlanet(id).then(data => {
        this.planet = data;
        const randomImageNumber = Math.floor(Math.random() * (3 - 2)) + 1;
        this.imageUrl = this.planet ? `planet-${randomImageNumber}.jpg` : "";
        this.changeHeaderImage(this.imageUrl);
      });
    }
  },
  methods: {
    ...mapMutations(["CHANGE_HEADER_IMAGE"]),
    changeHeaderImage(url) {
      if (url) {
        this.CHANGE_HEADER_IMAGE(url);
      }
    }
  },
  beforeDestroy() {
    this.changeHeaderImage("hero-banner.jpg");
  }
};
</script>
