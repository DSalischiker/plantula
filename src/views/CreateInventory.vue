<template>
  <article class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title has-text-centered">Crear Inventario</h1>
          <form @submit.prevent="createInventory">
            <div class="field">
              <label class="name">Nombre</label>
              <div class="control">
                <input
                  v-model="inventoryData.name"
                  type="text"
                  class="input"
                  placeholder="ej. Inventario de Lionel"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="name">Descripción</label>
              <div class="control">
                <textarea
                  v-model="inventoryData.description"
                  class="textarea"
                  placeholder="ej. Una breve descripción de tu nuevo inventario."
                  required
                ></textarea>
              </div>
            </div>

            <div class="field-has-text-right">
              <div class="control">
                <button
                  type="submit"
                  class="button is-primary"
                  :class="{ 'is-loading': isLoading }"
                >
                  <strong>Crear</strong>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "CreateInventory",
  data() {
    return {
      isLoading: false,
      inventoryData: {
        name: "",
        description: "",
      }
    }
  },
  methods: {
    async createInventory() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("inventories/createInventory", {
          name: this.inventoryData.name,
          description: this.inventoryData.description
        });
        this.$toast.success("Inventario creado");
        this.inventoryData.name = this.inventoryData.description = "";
        setTimeout(() => this.$router.push({ name: 'home' }), 1000);
      } catch (error) {
        console.error(error.message);
        this.$toast.error(error.message);
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<style>

</style>