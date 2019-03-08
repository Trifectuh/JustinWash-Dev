<template>
<div class="home-page">
  <section-header title="Perpetual Shred" 
                  code-url="https://github.com/Trifectuh/Perpetual-Shred"
                  web-url="https://www.perpetualshred.com"></section-header>
  <div class="section-banner" style="background-image: url('/assets/images/perpetual-shred-banner.png');"></div>
  <section-header title="Another Project" 
                  code-url="https://github.com/Trifectuh/Perpetual-Shred"
                  web-url="https://www.perpetualshred.com"></section-header>
  <div class="section-banner" src="/assets/images/perpetual-shred-banner.png"></div>
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
.home-page {
  width: 100vw;
}

p {
  font-size: 2em;
  text-align: center;
}

.section-banner {
  height: 400px;
  background-position: center;
}
</style>
