<template>
  <div>
    <div>
      <div>
        <p class="h2 font-weight-bold text-center text-muted mt-4">Popular Characters</p>
        <div style="border-bottom: 5px solid #555; max-width: 150px;" class="mx-auto"></div>
      </div>
      <div class="my-5">
        <div class="row">
          <div v-for="character in characters" :key="character.name" class="col-md-6">
            <CharacterItem :character="character" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCharacters } from "@/services/swapi.service";
import { addImages } from "@/utilities/helpers";
import CharacterItem from "@/components/characters/CharacterItem";

export default {
  name: "CharacterList",
  components: {
    CharacterItem
  },
  data() {
    return {
      characters: []
    };
  },
  mounted() {
    getCharacters().then(data => {
      const characters = data.results.slice(0, 4);
      this.characters = addImages(characters, "character", 4);
    });
  }
};
</script>
