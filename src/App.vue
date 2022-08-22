<template>
  <header>
    <!-- <Navbar /> -->
  </header>
  <main>
    <router-view />
  </main>


  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Please choose a Date</h5>
        </div>
        <div class="modal-body">
          <form class="d-flex flex-row justify-content-center">
            <input type="date">
            <button class="btn btn-outline-secondary ms-2"> <i class="mdi mdi-magnify"></i> </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import { AppState } from './AppState'
  export default {
    name: 'App',
    setup() {
      return {
        appState: computed(() => AppState)
      }
    }
  }
</script>
<style lang="scss">
  @import "./assets/scss/main.scss";
</style>