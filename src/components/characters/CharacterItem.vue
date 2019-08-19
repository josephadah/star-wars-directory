<template>
  <div style="background-color: #eee;" class="row no-gutters mb-4 transform-scale">
    <div class="col-md-7">
      <img
        :src="require(`../../assets/images/${character.imageUrl}`)"
        class="w-100 cursor-pointer"
        style="height: 250px;"
        :alt="character.name"
      />
    </div>
    <div class="col d-flex">
      <div class="px-3 py-2 align-self-center">
        <div>
          <strong class="h5">{{ character.name }}</strong>
        </div>
        <div class="small">
          <strong class="pr-2">Birth Year:</strong>
          <em>{{ character.birth_year }}</em>
        </div>
        <div class="small">
          <strong class="pr-2">Gender:</strong>
          <em>{{ character.gender }}</em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: Object
  }
};
</script>