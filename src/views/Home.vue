<template>
  <section class="hero is-small is-secondary" spaced="true">
    <div class="hero-body">
      <p class="title is-4 is-black" >Bienvenide</p>
      <p class="subtitle is-6">Llenemos el mundo de plantitas.</p>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
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
