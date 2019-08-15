<template>
  <div class="mt-3">
    <img
      :src="require(`../../assets/images/${planet.imageUrl}`)"
      style="width: 100%;"
      :alt="planet.name"
    />
    <span class="planet-name text-center pt-4">{{ planet.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    planet: Object
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
  font-size: 1.75rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 92%;
  z-index: 2;
}
</style>