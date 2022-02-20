<template>
  <header>
    <p class="logo">David Kiernan Furniture Design</p>
    <nav>
      <button>Portfolio</button>
      <button>About</button>
      <button>Contact</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    background-color: #7b0303;
    color: white;
    min-height: 100px;
    margin: 0;

    .logo {
      font-size: 2em;
      margin: 20px 50px;
    }

    nav {
      display: flex;
      align-items: center;
      margin: 5px 20px;

      button {
        width: 33%;
        padding: 5px 20px;
        border: 1px solid white;
        background-color: #7b0303;
        color: white;
        margin: 5px 10px;
        font-size: 1.2em;
        transition: .1s;
        cursor: pointer;

        &:hover {
        color: #7b0303;
        background-color: white;
        }
      }
    }
  }
</style>
