<template>
  <div class="home-page">
    <section class="container-fluid">
      <div class="row">
        <div class="col-1 offset-11 fixed-top">
          <h1><i class="mdi mdi-earth selectable" data-bs-toggle="modal" data-bs-target="#exampleModal"></i> </h1>
        </div>
        <div class="col-12">
          <h1></h1>
        </div>
      </div>
    </section>


  </div>
</template>


<script>
  import { logger } from '../utils/Logger.js';
  import Pop from '../utils/Pop.js';
  import { nasasService } from '../services/NasasService.js';
  import { computed, onMounted } from '@vue/runtime-core';
  import { AppState } from '../AppState.js';
  import { NasaInfo } from '../models/NasaInfo.js';
  // import NasaInfo from '../components/NasaInfo.vue';


  export default {
    setup() {
      async function getNasaInfo() {
        try {
          await nasasService.getNasaInfo();
        }
        catch (error) {
          logger.error("[getting nasa info]", error);
          Pop.error(error);
        }
      }
      onMounted(() => {
        getNasaInfo();
      });
      return {
        nasaInfo: computed(() => AppState.nasaInfo)
      };
    },
    components: { NasaInfo }
  }
</script>


<style lang="scss" scoped>

</style>