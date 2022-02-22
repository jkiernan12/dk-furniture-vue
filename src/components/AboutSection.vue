<template>
  <section>
    <h3>About</h3>
      <div class="content-container">
      <div class="image">
        <img src="../assets/MiniHall.jpeg" />
      </div>
      <div class="text">
        <p>David Kiernan's studio was established in 1993 immediately on completion of the two-year program he attended at Worcester Center for Crafts, in Worcester, MA. David creates his furniture with the help of one part-time assistant. He does limited production, commission pieces, and a small amount of production work. He works primarily in wood, both solid and veneers, but also uses a variety of other materials as accents - metal being the most common. David's furniture is sold through craft fairs and through craft galleries around the country.

</p>
        <p>"I became a furniture maker as a need to express my creativity, which had been stifled for 10 years in my previous occupation as an engineer. My work allows me to have fun, and to sit back at the end of the day with a sense of satisfaction that I have created something that is both useful and beautiful. My work is contemporary, has clean lines, and has been recognized for its simplicity and elegance of form. Highlighting the beauty of the materials used, and minimizing distractions from gimmicky design, is always my goal."</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  .content-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10%;
  }

  .text {
    text-align: left;
    margin: 10%;
  }
}
</style>
