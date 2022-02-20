<template>
  <section>
    <h3>Contact</h3>
    <p>Email: <a href="mailto:dkiernan10@yahoo.com">dkiernan10@yahoo.com</a></p>
    <p>Phone: <a href="tel:+4015738259">401-573-8259</a></p>
    <p>Address: <a href="https://goo.gl/maps/88TmtX9E8hzimSpd6">81 Calder St., Cranston RI</a></p>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5% auto;
    flex-direction: column;
  }
</style>
