<template>
  <div>
    <div>
      <div v-if="showTitle">
        <p class="h2 font-weight-bold text-center text-muted mt-4">Popular Starships</p>
        <div style="border-bottom: 5px solid #555; max-width: 150px;" class="mx-auto"></div>
      </div>
      <div class="mt-3 mb-5">
        <div class="row justify-content-center">
          <div v-for="starship in starships" :key="starship.name" class="col-md-4">
            <StarshipItem :starship="starship" />
          </div>
          <div v-if="!isLoading && starships.length < 1">
            <p class="h4 pt-3 pb-5 text-danger">No results found</p>
          </div>
        </div>
        <ListItemLoader v-if="isLoading" :columnsCount="3" />
        <slot v-if="starships.length > 0"></slot>
        <Pagination
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
import { getStarships } from "@/services/swapi.service";
import { addImages } from "@/utilities/helpers";
import StarshipItem from "@/components/starships/StarshipItem";
import Pagination from "@/components/common/Pagination";
import ListItemLoader from "@/components/common/ListItemLoader";

export default {
  name: "StarshipList",
  components: {
    StarshipItem,
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
      starships: [],
      totalCount: 0,
      pageSize: 1,
      currentPage: 1,
      isLoading: false
    };
  },
  mounted() {
    this.fetchStarships();
  },
  computed: {
    showFew() {
      return Number.isInteger(this.showingNumber);
    }
  },
  watch: {
    query() {
      this.fetchStarships(this.query);
    }
  },
  methods: {
    fetchStarships(query) {
      this.isLoading = true;
      getStarships(1, query).then(data => {
        let starships = data.results;
        if (this.exceptName) {
          starships = starships.filter(x => x.name !== this.exceptName);
        }
        if (this.showFew) {
          starships = starships.slice(0, this.showingNumber);
        }
        this.totalCount = data.count;
        this.pageSize = data.results.length;
        this.starships = addImages(starships, "starship", 6);
        this.isLoading = false;
      });
    },
    pageChange(page) {
      this.starships.length = 0;
      this.isLoading = true;
      getStarships(page).then(data => {
        const starships = data.results;
        this.currentPage = page;
        this.starships = addImages(starships, "starship", 6);
        this.isLoading = false;
      });
    }
  }
};
</script>