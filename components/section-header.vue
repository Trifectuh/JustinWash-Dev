<template>
<div class="section-header">
  {{ title }}
</div>
</template>

<script>
module.exports = {
  props: ['title']
}
</script>

<style scoped>
.section-header {
  background: lightpink;
  width: 100%;
  font-size: 2em;
  font-weight: bold;
  font-family: sans-serif;
  width: 100%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>