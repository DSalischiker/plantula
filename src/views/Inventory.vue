<template>
  <div class="home">
    <section class="section">
      <div class="container">
        <template v-if="user">
          Inventario de {{ user.displayName }}
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Inventory",
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState("user", ["user"]),
  }
}
</script>

<style>

</style>
