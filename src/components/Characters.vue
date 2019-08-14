<template>
  <div>
    <div>
      <div>
        <p class="h2 font-weight-bold text-center text-muted mt-4">Popular Characters</p>
        <div style="border-bottom: 5px solid #555; max-width: 150px;" class="mx-auto"></div>
      </div>
      <div class="my-5">
        <div class="row">
          <div class="col-md-6">
            <div style="background-color: #eee;" class="row no-gutters">
              <div class="col-md-7">
                <img src="@/assets/images/character-1.jpg" style="max-width: 100%;" alt />
              </div>
              <div class="col d-flex">
                <div class="px-3 py-3 align-self-center">
                  <strong class="h5">Luke Skywalker</strong>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCharacters } from "../services/swapi.service";
export default {
  mounted() {
    getCharacters().then(data => console.log(data));
  }
};
</script>
