<template>
  <div class="home">
    <section class="hero is-small is-secondary mb-4" spaced="true">
      <div class="hero-body">
        <p class="title is-4 is-black" >Inventario de {{ user.displayName }}</p>
      </div>
    </section>
      <div class="container">
        <template v-if="user">
          <section class="hero is-small is-secondary" spaced="true">

          </section>
          <div class="columns is-desktop">
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-square">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="is-flex is-justify-content-start">
                    <p class="title is-4 has-text-dark">Fitonia</p>
                  </div>

                  <div class="content is-flex is-flex-direction-column is-justify-content-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.

                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">2</div>
            <div class="column">3</div>
            <div class="column">4</div>
          </div>
        </template>
      </div>
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

<style lang="scss" scoped>
.hero-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  text-align: start;
  margin-left: 1em;
}
.subtitle{
  color: $light !important;
}
</style>
