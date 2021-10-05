<template>
  <b-navbar type="is-black"  spaced="true">
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
          <a class="button is-primary">
            <strong>Registrarme</strong>
          </a>
          <a class="button is-light">
            Ingresar
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "TheHeader",
}
</script>

<style lang="scss" scoped>
h1 {
  color: $primary !important;
  letter-spacing: 0.025em;
}
</style>