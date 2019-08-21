<template>
  <div>
    <div>
      <div v-if="showTitle">
        <p class="h2 font-weight-bold text-center text-muted mt-4">Popular Planets</p>
        <div style="border-bottom: 5px solid #555; max-width: 150px;" class="mx-auto"></div>
      </div>
      <div class="mt-3 mb-5">
        <div class="row justify-content-center">
          <div v-for="planet in planets" :key="planet.name" class="col-md-4">
            <PlanetItem :planet="planet" />
          </div>
          <div v-if="!isLoading && planets.length < 1">
            <p class="h4 pt-3 pb-5 text-danger">No results found</p>
          </div>
        </div>
        <ListItemLoader v-if="isLoading" :columnsCount="3" />
        <slot v-if="planets.length > 0"></slot>
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
import ListItemLoader from "@/components/common/ListItemLoader";

export default {
  name: "PlanetList",
  components: {
    PlanetItem,
    Pagination,
    ListItemLoader
  },
  props: {
    showingNumber: Number,
    exceptName: String,
    showTitle: Boolean,
    query: String
  },
  data() {
    return {
      planets: [],
      totalCount: 0,
      pageSize: 1,
      currentPage: 1,
      isLoading: false
    };
  },
  mounted() {
    this.fetchPlanets();
  },
  computed: {
    showFew() {
      return Number.isInteger(this.showingNumber);
    }
  },
  watch: {
    query() {
      this.fetchPlanets(this.query);
    }
  },
  methods: {
    fetchPlanets(query) {
      this.isLoading = true;
      getPlanets(1, query).then(data => {
        let planets = data.results;
        if (this.exceptName) {
          planets = planets.filter(x => x.name !== this.exceptName);
        }
        if (this.showFew) {
          planets = planets.slice(0, this.showingNumber);
        }
        this.totalCount = data.count;
        this.pageSize = data.results.length;
        this.planets = addImages(planets, "planet", 3);
        this.isLoading = false;
      });
    },
    pageChange(page) {
      this.planets.length = 0;
      this.isLoading = true;
      getPlanets(page).then(data => {
        const planets = data.results;
        this.currentPage = page;
        this.planets = addImages(planets, "planet", 3);
        this.isLoading = false;
      });
    }
  }
};
</script>