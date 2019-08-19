<template>
  <div>
    <div class="row justify-content-center">
      <div v-if="starship" class="col-9 mt-4 mb-5 pb-5">
        <h3 class="mt-4 mb-4">{{ starship.name }}</h3>
        <div>
          <div class="mb-2">
            <strong class="pr-2">Model:</strong>
            <em>{{ starship.model }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Manufacturer:</strong>
            <em>{{ starship.manufacturer }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Starship Class:</strong>
            <em>{{ starship.starship_class }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Cargo Capacity:</strong>
            <em>{{ starship.cargo_capacity }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Crew:</strong>
            <em>{{ starship.crew }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Passengers:</strong>
            <em>{{ starship.passengers }}</em>
          </div>
          <div class="mb-2">
            <strong class="pr-2">Max Speed:</strong>
            <em>{{ starship.max_atmosphering_speed }}</em>
          </div>
        </div>
      </div>
    </div>
    <ItemDetailsLoader v-if="!starship" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getStarship } from "../services/swapi.service";
import ItemDetailsLoader from "../components/common/ItemDetailsLoader";

export default {
  components: {
    ItemDetailsLoader
  },
  data() {
    return {
      starship: {},
      imageUrl: ""
    };
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) {
      getStarship(id).then(data => {
        this.starship = data;
        const randomImageNumber = Math.floor(Math.random() * (6 - 2)) + 1;
        this.imageUrl = this.starship
          ? `starship-${randomImageNumber}.jpg`
          : "";
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