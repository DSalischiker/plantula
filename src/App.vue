<template>
  <div id="app">
    <the-header/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: "App",
  components: {
    TheHeader
  }
};
</script>


<style lang="scss">
#app {
  font-family: Lato, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1, h2, h3, h4, h5, h6 {
    font-family: Poppins;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
