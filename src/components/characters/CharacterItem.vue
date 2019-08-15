<template>
  <div style="background-color: #eee;" class="row no-gutters mb-4">
    <div class="col-md-7">
      <img
        :src="require(`../../assets/images/${character.imageUrl}`)"
        style="width: 100%; height: 250px;"
        :alt="character.name"
      />
    </div>
    <div class="col d-flex">
      <div class="px-3 py-2 align-self-center">
        <strong class="h5">{{ character.name }}</strong>
        <small>
          <em class="d-block">Son of Anakin</em>
        </small>
        <p class="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          corrupti reprehenderit temporibus eos accusamus
        </p>
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