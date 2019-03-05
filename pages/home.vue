<template>
  <p>{{ greeting }}</p>
</template>

<script>
module.exports = {
  data: function () {
    return {
      greeting: 'This is the home page'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>