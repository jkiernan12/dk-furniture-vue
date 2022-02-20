<template>
  <section>
    <h3>Portfolio</h3>
    <div class="card-container">
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </div>
  </section>
</template>

<script>
import PortfolioCard from './PortfolioCard.vue'
export default {
  name: 'PortfolioSection',
  components: {
    PortfolioCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  section {
    .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
    margin: 1rem;
    }

  }
</style>
