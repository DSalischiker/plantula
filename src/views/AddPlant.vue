<template>
  <article class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title has-text-centered">Agregar Planta</h1>
          <form @submit.prevent="createPlant">
            <div class="field">
              <label class="name">Nombre</label>
              <div class="control">
                <input
                  v-model="plantData.name"
                  type="text"
                  class="input"
                  placeholder="ej. Potus Cocina de Lionel"
                  required
                />
              </div>
            </div>

            <b-field label="Grouped">
              <b-select placeholder="Especie">
                <b-icon
                  icon="seedling"
                  size="is-small">
                </b-icon>
                <option>Desconozco</option>
                <optgroup label="De Interior">
                  <option value="Potus">Potus</option>
                  <option value="Philodendron">Philodendron</option>
                  <option value="Begonia">Begonia</option>
                  <option value="Helecho">Helecho</option>
                  <option value="Fitonia">Fitonia</option>
                </optgroup>

                <optgroup label="De Exterior">
                  <option value="Jazmín">Jazmín</option>
                  <option value="Salvia">Salvia</option>
                  <option value="Malvón">Malvón</option>
                  <option value="Menta">Menta</option>
                  <option value="Caléndula">Caléndula</option>
                  <option value="Albahaca">Albahaca</option>
                </optgroup>
              </b-select>
            </b-field>

            <div>
              <b-field>
                <b-upload v-model="dropFiles"
                    multiple
                    drag-drop>
                  <section class="section">
                    <div class="content has-text-centered">
                      <p>
                        <b-icon
                            icon="upload"
                            size="is-large">
                        </b-icon>
                      </p>
                      <p>Drop your files here or click to upload</p>
                    </div>
                  </section>
                </b-upload>
              </b-field>

              <div class="tags">
                <span v-for="(file, index) in dropFiles"
                  :key="index"
                  class="tag is-primary"
                >
                  {{file.name}}
                  <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                  </button>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="name">Descripción</label>
              <div class="control">
                <textarea
                  v-model="plantData.description"
                  class="textarea"
                  placeholder="ej. Una breve descripción de tu planta."
                  required
                ></textarea>
              </div>
            </div>

            <div>
              <b-field>
                <b-checkbox name="isPropagable" v-model="plantData.isPropagable">Es propagable</b-checkbox>
              </b-field>
              <!-- <b-field>
                  <b-checkbox v-model="plantData.isPropagable">
                      No
                  </b-checkbox>
              </b-field> -->
            </div>

            <b-field label="Sol">
              <b-slider v-model="plantData.sunAmount" :min="1" :max="5" size="is-small" ticks></b-slider>
            </b-field>

            <b-field label="Agua">
              <b-slider v-model="plantData.waterAmount" :min="1" :max="5" size="is-small" ticks></b-slider>
            </b-field>

            <div class="field-has-text-right">
              <div class="control">
                <button
                  type="submit"
                  class="button is-primary"
                  :class="{ 'is-loading': isLoading }"
                >
                  <strong>Agregar planta a inventario</strong>
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
  name: "AddPlant",
  data() {
    return {
      isLoading: false,
      plantData: {
        name: "",
        description: "",
        isPropagable: true,
        sunAmount: 3,
        waterAmount: 3,
      },
      dropFiles: [],
    }
  },
  methods: {
    async createPlant() {
      this.isLoading = true;

      /* try {
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
      } */
    },
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
    }
  }
}
</script>

<style>

</style>