<template>
  <b-navbar type="is-black" :spaced="true">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1 class="title" type="is-primary">plántula</h1>
      </b-navbar-item>
    </template>
    <template #start centered="true">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Inicio
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/inventory' }">
        Inventario
      </b-navbar-item>
      <b-navbar-dropdown label="Info" aria-role="menu" :focusable="true">
        <b-navbar-item aria-role="menuitem">
          About
        </b-navbar-item>
        <b-navbar-item aria-role="menuitem">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <template v-if="user">
            <router-link
              class="button is-primary"
              :to="{ name: 'profile' }"
            >
              <strong>Profile</strong>
            </router-link>
            <a @click="doLogout" class="button is-light">
              Log Out
            </a>
          </template>
          <template v-else>
            <router-link
              class="button is-primary"
              :to="{ name: 'auth' }"
            >
              <strong>Ingresar</strong>
            </router-link>
          </template>
          <!-- <a class="button is-primary">
            <strong>Registrarme</strong>
          </a>
          <a class="button is-light">
            Ingresar
          </a> -->
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TheHeader",
  methods: {
    async doLogout() {
      try {
        await this.$store.dispatch("user/doLogout");
        this.$router.push({ name: "auth" });
        console.log("Logged out");
        this.$toast.success("Logged out");
      } catch (error) {
        console.error(error.message);
        this.$toast.error(error.message);
      }
    }
  },
  computed: {
    ...mapState("user", ["user"])
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: $primary !important;
  letter-spacing: 0.025em;
}
</style>