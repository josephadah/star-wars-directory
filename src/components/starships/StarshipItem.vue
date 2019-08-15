<template>
  <div class="mb-3">
    <img
      :src="require(`../../assets/images/${starship.imageUrl}`)"
      style="width:100%; height:250px;"
      :alt="starship.name"
    />
    <div class="info-wrapper">
      <div class="info-inner p-2">
        <strong class="h5">{{ starship.name }}</strong>
        <p class="pt-2 small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          corrupti reprehenderit temporibus eos accusamus
        </p>
        <div class="d-flex justify-content-end">
          <button class="btn btn-secondary mr-1">
            Read more
            <i class="fas fa-arrow-right small pl-1"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    starship: Object
  }
};
</script>

<style scoped>
.info-wrapper {
  background-color: #ddd;
  padding-left: 7px;
  padding-bottom: 7px;
}
.info-inner {
  background-color: #eee;
  height: 100%;
}
</style>