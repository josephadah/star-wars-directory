<template>
  <div class="mb-4 transform-scale" @click="gotoDetailsPage">
    <img
      :src="require(`../../assets/images/${starship.imageUrl}`)"
      class="w-100 cursor-pointer"
      style="height:250px;"
      :alt="starship.name"
    />
    <div class="info-wrapper">
      <div class="info-inner p-2">
        <strong class="h5">{{ starship.name }}</strong>
        <div class="small pt-2 pb-2">
          <strong class="pr-2">Model:</strong>
          <em>{{ starship.model }}</em>
        </div>
        <div class="small pb-3">
          <strong class="pr-2">Cargo capacity:</strong>
          <em>{{ starship.cargo_capacity }}</em>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn btn-secondary btn-sm mr-1">
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
  },
  methods: {
    gotoDetailsPage() {
      const url = this.starship.url;
      const tempArr = url.split("/");
      const id = Number(tempArr[5]);
      if (!Number.isNaN(id)) {
        this.$router.push(`/starships/${id}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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