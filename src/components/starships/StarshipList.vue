<template>
  <div>
    <div>
      <div>
        <p class="h2 font-weight-bold text-center text-muted mt-4">Popular Starships</p>
        <div style="border-bottom: 5px solid #555; max-width: 150px;" class="mx-auto"></div>
      </div>
      <div class="mt-3 mb-5">
        <div class="row justify-content-center">
          <div v-for="starship in starships" :key="starship.name" class="col-md-4">
            <StarshipItem :starship="starship" />
          </div>
        </div>
        <ListItemLoader v-if="starships.length < 1" :columnsCount="3" />
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
    showFew: Boolean
  },
  data() {
    return {
      starships: [],
      totalCount: 0,
      pageSize: 1,
      currentPage: 1
    };
  },
  mounted() {
    getStarships().then(data => {
      const starships = this.showFew ? data.results.slice(0, 6) : data.results;
      this.totalCount = data.count;
      this.pageSize = starships.length;
      this.starships = addImages(starships, "starship", 6);
    });
  },
  methods: {
    pageChange(page) {
      getStarships(page).then(data => {
        const starships = data.results;
        this.currentPage = page;
        this.starships = addImages(starships, "starship", 6);
      });
    }
  }
};
</script>