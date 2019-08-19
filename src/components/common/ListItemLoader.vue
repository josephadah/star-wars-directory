<template>
  <div class="row">
    <div :class="`col-md-${12 / columnsCount}`" v-for="(column, index) in columns" :key="index">
      <div class="loader-wrapper mb-4">
        <div class="animated-background list-item"></div>
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
.list-item {
  width: 100%;
  height: 300px;
}
</style>