<template>
  <div>
    <div>
      <div>
        <p class="h2 font-weight-bold text-center text-muted mt-4">Popular Planets</p>
        <div style="border-bottom: 5px solid #555; max-width: 150px;" class="mx-auto"></div>
      </div>
      <div class="mt-3 mb-5">
        <div class="row justify-content-center">
          <div v-for="planet in planets" :key="planet.name" class="col-md-4">
            <PlanetItem :planet="planet" />
          </div>
        </div>
        <slot></slot>
        <Pagination
          class="mt-2"
          v-if="!showFew && totalCount > pageSize"
          :totalCount="totalCount"
          :pageSize="pageSize"
          :currentPage="currentPage"
          @page-change="pageChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getPlanets } from "@/services/swapi.service";
import { addImages } from "@/utilities/helpers";
import PlanetItem from "@/components/planets/PlanetItem";
import Pagination from "@/components/common/Pagination";

export default {
  name: "PlanetList",
  components: {
    PlanetItem,
    Pagination
  },
  props: {
    showFew: Boolean
  },
  data() {
    return {
      planets: [],
      totalCount: 0,
      pageSize: 1,
      currentPage: 1
    };
  },
  mounted() {
    getPlanets().then(data => {
      const planets = this.showFew ? data.results.slice(0, 3) : data.results;
      this.planets = addImages(planets, "planet", 3);
      this.totalCount = data.count;
      this.pageSize = planets.length;
    });
  },
  methods: {
    pageChange(page) {
      getPlanets(page).then(data => {
        const planets = data.results;
        this.currentPage = page;
        this.planets = addImages(planets, "planet", 3);
      });
    }
  }
};
</script>