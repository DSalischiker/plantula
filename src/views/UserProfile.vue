<template>
  <article class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title has-text-centered">
            Profile
          </h1>
          <!-- User Profile Form -->
          <form v-if="user" @submit.prevent="updateProfile">
            <div class="field">
              <label class="label">Nombre de usuario</label>
              <div class="control">
                <input
                  :placeholder="user.displayName"
                  v-model="userData.username"
                  class="input"
                  type="text"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  :placeholder="user.email"
                  v-model="userData.email"
                  class="input"
                  type="email"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  v-model="userData.password"
                  class="input"
                  type="password"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Número de teléfono</label>
              <div class="control">
                <input
                  :placeholder="user.phone"
                  v-model="userData.phone"
                  class="input"
                  type="number"
                />
              </div>
            </div>


            <b-field
              label="Barrio">
              <b-select
                v-model="userData.neighbourhood"
                placeholder="Seleccioná tu barrio"
                expanded
              >
                  <option value="Villa Crespo">Villa Crespo</option>
                  <option value="Almagro">Almagro</option>
                  <option value="Caballito">Caballito</option>
                  <option value="Paternal">Paternal</option>
              </b-select>
            </b-field>


            <div class="field has-text-right">
              <div class="control">
                <button
                  type="submit"
                  class="button is-primary"
                  :disabled="!hasDataChanged"
                  :class="{ 'is-loading': isLoading }"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
          <!-- End of User Profile Form -->
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isLoading: false,
      userData: {
        username: "",
        email: "",
        password: "",
        phone: "",
        neighbourhood: "",
      }
    };
  },
  methods: {
    async updateProfile() {
      this.isLoading = true;
      /* try {
        await this.$store.dispatch("user/updateProfile", {
          username: this.userData.username,
          email: this.userData.email,
          password: this.userData.password,
          phone: this.userData.phone,
          neighbourhood: this.userData.neighbourhood
        });
        this.$toast.success("Account data updated");
        this.userData.name = this.userData.email = this.userData.password = this.userData.phone = this.userData.neighbourhood = "";
      } catch (error) {
        console.error(error.message);
        this.$toast.error(error.message);
      } finally {
        this.isLoading = false;
      } */
    }
  },
  computed: {
    ...mapState("user", ["user"]),
    hasDataChanged() {
      // Name exists and is different
      return (this.userData.name && this.userData.name !== this.user.displayName ||
      // Email exists and is different
      this.userData.email && this.userData.email !== this.user.email ||
      // Password exists and is different
      this.userData.password.length ||
      // Phone exists and is different
      this.userData.phone && this.userData.phone !== this.user.phone ||
      // Neighbourhood exists and is different
      this.userData.neighbourhood && this.userData.neighbourhood !== this.user.neighbourhood
      );
    }
  }
}
</script>

<style>

</style>