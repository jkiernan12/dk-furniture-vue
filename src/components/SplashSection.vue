<template>
  <main>
    <div class="splash-image">
      <img src="../assets/misc/MiniHall.jpeg" />
    </div>
    <div class="splash-text">
      <p>David Kiernan has been making contemporary furniture in his Rhode Island studio since 1993. David, a former engineer, studied woodworking at the Worcester Center for Crafts.</p>
      <p>"I find it exhilarating to use materials such as unique veneers, unusual stone, or patinated metals. Envisioning how to use these materials, provokes excitement and eagerness to proceed with a project. This to me is the essence of being a furniture maker; the process of discovery followed by transformation into a tangible, beautiful object."</p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SplashSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
main {
  background-color: #7b0303;
  color: white;
  margin: 0; 
  min-height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .splash-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10%;
  }

  .splash-text {
    text-align: left;
    margin: 10%;
  }
}
</style>
