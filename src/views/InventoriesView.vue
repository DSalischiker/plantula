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
  </div>
</template>

<script>
// @ is an alias to /src
/* import {fb, auth} from "../firebase"; */
import { db } from "../firebase";
export default {
  name: 'InventoriesView',
  async created() {
    const user = {name: "Diegolas", city: "Buenos Aires", country: "Argentina"};
    await db
      .collection("users")
      .doc("diego")
      .set(user, { merge: true });

    // Add
    await db.collection("users").add(user);

    //Get new ID and then add
  },
  data() {
    return {
      user: null,
    }
  },
  methods: {
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
