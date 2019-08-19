<template>
  <div class="row justify-content-center">
    <div class="col-9 my-5">
      <div class="loader-wrapper">
        <div class="animated-background item-detail"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columnsCount: Number
  },
  computed: {
    columns() {
      return new Array(this.columnsCount);
    }
  }
};
</script>

<style lang="scss" scoped>
.item-detail {
  width: 100%;
  height: 350px;
}
</style>