<template>
  <div>
    <section class="hero is-small is-secondary" spaced="true">
      <div class="hero-body">
        <p class="title is-4 is-black" >Bienvenide</p>
        <p class="subtitle is-6">Llenemos el mundo de plantitas.</p>
      </div>
    </section>
    <section>
      <router-link :to="{ name: 'createInventory' }">
        <button type="button" class="button is-primary">Crear inventario</button>
      </router-link>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered is-white">
          Inventarios
        </h1>
      </div>

      <inventory-item :inventories="inventories" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
/* import {fb, auth} from "../firebase"; */
import { mapState } from "vuex";

import InventoryItem from "../components/InventoryItem.vue";
export default {
  name: 'InventoriesView',
  components: {
    InventoryItem
  },
  computed: {
    ...mapState("inventories", ["inventories"])
  }
}
</script>

<style lang="scss" scoped>
.hero-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  text-align: start;
  margin-left: 1em;
}
.title{
  color: $light !important;
}
.subtitle{
  color: $light !important;
}
</style>
