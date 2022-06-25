<template>
  <div v-if="!$store.state.isLoading">
    <h1 v-if="!inventories.length" class="subtitle has-text-centered mt-2">
      No hay inventarios.
      <router-link :to="{ name: 'create'}">Crear uno</router-link>
    </h1>
    <div v-else class="columns is-multiline">
      <!-- Inventory element -->
      <div v-for="inventory in inventories" :key="inventory.id" class="column is-one-third">
        <div class="card">
          <div class="card-image">
            <figure class="image is-16by9">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder Image"
              />
              </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ inventory.name }}</p>
                <p class="subtitle is-6">de {{ inventory.adminName }}</p>
              </div>
            </div>
            <div class="content">
              {{ inventory.description }}
            </div>
          </div>
        </div>
      </div>
      <!-- End of inventory element -->
    </div>
  </div>
</template>

<script>
export default {
  name: "InventoryItem",
  props: {
    inventories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>