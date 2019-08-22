<template>
  <div class="mt-4 transform-scale" @click="gotoDetailsPage">
    <img
      :src="require(`../../assets/images/${planet.imageUrl}`)"
      class="w-100 cursor-pointer"
      :alt="planet.name"
    />
    <div class="planet-name text-center pt-4 pb-2">
      <p class="h3 pb-0 mb-0">{{ planet.name }}</p>
      <span class="small pr-2">
        <strong>Climate:</strong>
        {{ planet.climate }}
      </span> |
      <span class="small pl-2">
        <strong>Population:</strong>
        {{ planet.population }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    planet: Object
  },
  methods: {
    gotoDetailsPage() {
      const url = this.planet.url;
      const tempArr = url.split("/");
      const id = Number(tempArr[5]);
      if (!Number.isNaN(id)) {
        this.$router.push(`/planets/${id}`);
      }
    }
  }
};
</script>

<style scoped>
.planet-name {
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 10%,
    rgba(0, 0, 0, 1) 40%
  );
  color: #f1f1f1;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 92%;
  z-index: 2;
}
</style>