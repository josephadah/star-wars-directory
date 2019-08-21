<template>
  <div>
    <div>
      <div v-if="showTitle">
        <p class="h2 font-weight-bold text-center text-muted mt-4">Popular Characters</p>
        <div style="border-bottom: 5px solid #555; max-width: 150px;" class="mx-auto"></div>
        <div v-if="!showFew" class="m-3">
          <form class="form-inline">
            <div class="form-group col-md-6">
              <label for="gender" class="pr-3 h4">Filter</label>
              <select v-model="gender" id="gender" name="gender" class="form-control">
                <option :value="''" selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="n/a">Robot</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-3 mb-5">
        <div class="row justify-content-center">
          <div v-for="character in characters" :key="character.name" class="col-md-6">
            <CharacterItem :character="character" />
          </div>
          <div v-if="!isLoading && characters.length < 1">
            <p class="h4 pt-3 pb-5 text-danger">No results found</p>
          </div>
        </div>
        <ListItemLoader v-if="isLoading" :columnsCount="2" />
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
      gender: "",
      totalCount: 0,
      pageSize: 1,
      currentPage: 1,
      isLoading: false,
      initialchars: []
    };
  },
  props: {
    showingNumber: Number,
    exceptName: String,
    showTitle: Boolean,
    query: String
  },
  mounted() {
    this.fetchCharacters();
  },
  watch: {
    query() {
      this.fetchCharacters(this.query);
    },
    gender() {
      if (this.gender) {
        this.characters = this.initialchars.filter(
          character => character.gender === this.gender
        );
        this.totalCount = this.characters.length;
      } else {
        this.characters = [...this.initialchars];
      }
    }
  },
  computed: {
    showFew() {
      return Number.isInteger(this.showingNumber);
    }
  },
  methods: {
    fetchCharacters(query) {
      this.isLoading = true;
      getCharacters(1, query).then(data => {
        let characters = data.results;
        if (this.exceptName) {
          characters = characters.filter(x => x.name !== this.exceptName);
        }
        if (this.showFew) {
          characters = characters.slice(0, this.showingNumber);
        }
        this.totalCount = data.count;
        this.pageSize = data.results.length;
        this.characters = addImages(characters, "character", 4);
        this.initialchars = [...this.characters];
        this.isLoading = false;
      });
    },
    pageChange(page) {
      this.characters.length = 0;
      this.isLoading = true;
      getCharacters(page).then(data => {
        const characters = data.results;
        this.currentPage = page;
        this.characters = addImages(characters, "character", 4);
        this.initialchars = [...this.characters];
        this.isLoading = false;
      });
    }
  }
};
</script>
