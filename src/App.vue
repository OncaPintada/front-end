<template>
  <div id="app">
    <Nav-Bar/>
    <router-view/>
    <FooterSection/>
  </div>
</template>

<script>
import NavBar from "@/components/Nav-Bar.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterSection,
  },
};
</script>

<style>

#app {
  min-height: 100vh;
  background-color: #D9D9D9;
}
</style>