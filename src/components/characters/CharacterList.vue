<template>
  <div>
    <div>
      <div>
        <p class="h2 font-weight-bold text-center text-muted mt-4">Popular Characters</p>
        <div style="border-bottom: 5px solid #555; max-width: 150px;" class="mx-auto"></div>
      </div>
      <div class="mt-3 mb-5">
        <div class="row justify-content-center">
          <div v-for="character in characters" :key="character.name" class="col-md-6">
            <CharacterItem :character="character" />
          </div>
        </div>
        <ListItemLoader v-if="characters.length < 1" :columnsCount="2" />
        <slot v-if="characters.length > 0"></slot>
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
import { getCharacters } from "@/services/swapi.service";
import { addImages } from "@/utilities/helpers";
import CharacterItem from "@/components/characters/CharacterItem";
import Pagination from "@/components/common/Pagination";
import ListItemLoader from "@/components/common/ListItemLoader";

export default {
  name: "CharacterList",
  components: {
    CharacterItem,
    Pagination,
    ListItemLoader
  },
  data() {
    return {
      characters: [],
      totalCount: 0,
      pageSize: 1,
      currentPage: 1
    };
  },
  props: {
    showFew: Boolean
  },
  mounted() {
    getCharacters().then(data => {
      const characters = this.showFew ? data.results.slice(0, 4) : data.results;
      this.characters = addImages(characters, "character", 4);
      this.totalCount = data.count;
      this.pageSize = characters.length;
    });
  },
  methods: {
    pageChange(page) {
      getCharacters(page).then(data => {
        const characters = data.results;
        this.currentPage = page;
        this.characters = addImages(characters, "character", 4);
      });
    }
  }
};
</script>