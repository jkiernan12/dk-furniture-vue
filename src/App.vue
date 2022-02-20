<template>
  <HeaderSection />
  <SplashSection />
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import SplashSection from './components/SplashSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    SplashSection
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
