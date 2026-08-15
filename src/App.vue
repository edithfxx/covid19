<template>
  <div id="app">
    <header-page></header-page>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer-page></footer-page>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    "header-page": Header,
    "footer-page": Footer,
  },
};
</script>
