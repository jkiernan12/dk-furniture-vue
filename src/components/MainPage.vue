<template>
<router-view>
  <HeaderSection />
  <SplashSection />
  <PortfolioSection />
  <AboutSection />
  <ContactSection />
</router-view>
</template>

<script>
import HeaderSection from './HeaderSection.vue'
import SplashSection from './SplashSection.vue'
import PortfolioSection from './PortfolioSection.vue'
import AboutSection from './AboutSection.vue'
import ContactSection from './ContactSection.vue'

export default {
  name: 'MainPage',
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
