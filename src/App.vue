<template>
  <HeaderSection />
  <SplashSection />
  <PortfolioSection />
  <AboutSection />
  <ContactSection />
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import SplashSection from './components/SplashSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    SplashSection,
    PortfolioSection,
    AboutSection,
    ContactSection
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
