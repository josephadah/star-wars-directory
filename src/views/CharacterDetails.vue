<template>
  <div>
    <div class="row justify-content-center">
      <div v-if="character" class="col-9 mt-4 mb-5 pb-5">
        <div class="d-inline-block">
          <div class="floating-title d-flex align-items-center p-3">
            <div class="left-block mr-4"></div>
            <h3 class="text-white">{{ character.name }}</h3>
            <div class="right-block ml-4"></div>
          </div>
        </div>
        <h3 class="mt-1 mb-4">{{ character.name }}</h3>
        <div>
          <div class="mb-2">
            <strong class="pr-2">Gender:</strong>
            <em>{{ character.gender }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Birth year:</strong>
            <em>{{ character.birth_year }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Eye color:</strong>
            <em>{{ character.eye_color }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Hair color:</strong>
            <em>{{ character.hair_color }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Height:</strong>
            <em>{{ character.height }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Mass:</strong>
            <em>{{ character.mass }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Skin color:</strong>
            <em>{{ character.skin_color }}</em>
          </div>
        </div>
      </div>
    </div>
    <ItemDetailsLoader :columnsCount="2" v-if="!character" />
    <div v-if="character">
      <div class="text-center">
        <div class="border-bottom pb-2 mb-3">
          <h3 class="pl-4 pr-4 pb-2 pt-2 border d-inline-block">Recently viewed Character</h3>
        </div>
        <CharacterList :showingNumber="2" :exceptName="character.name" :showTitle="false" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getCharacter } from "../services/swapi.service";
import ItemDetailsLoader from "../components/common/ItemDetailsLoader";
import CharacterList from "../components/characters/CharacterList";

export default {
  components: {
    ItemDetailsLoader,
    CharacterList
  },
  data() {
    return {
      character: {},
      imageUrl: ""
    };
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) {
      getCharacter(id).then(data => {
        this.character = data;
        const randomImageNumber = Math.floor(Math.random() * (4 - 2)) + 1;
        this.imageUrl = this.character
          ? `character-${randomImageNumber}.jpg`
          : "";
        this.changeHeaderImage(this.imageUrl);
        this.toggleShowSearch(false);
      });
    }
  },
  methods: {
    ...mapMutations(["CHANGE_HEADER_IMAGE", "TOGGLE_SHOW_SEARCH"]),
    changeHeaderImage(url) {
      if (url) {
        this.CHANGE_HEADER_IMAGE(url);
      }
    },
    toggleShowSearch(value) {
      this.TOGGLE_SHOW_SEARCH(value);
    }
  },
  beforeDestroy() {
    this.changeHeaderImage("hero-banner.jpg");
    this.toggleShowSearch(true);
  }
};
</script>
