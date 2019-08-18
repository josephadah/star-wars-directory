<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="mt-3">
        <router-link :to="path">
          <button class="btn btn-block btn-outline-secondary p-2">View More</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  }
};
</script>