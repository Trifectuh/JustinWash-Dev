<template>
<div class="home-page">
  <section-header title="Perpetual Shred"></section-header>
  <img src="/assets/images/perpetual-shred-banner.png"></img>
</div>
</template>

<script>
module.exports = {
  components: {
    'section-header': httpVueLoader('components/section-header.vue')
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
