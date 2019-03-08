<template>
<div class="section-detail">
  
</div>
</template>

<script>
module.exports = {
  props: ['platform', 'technologies', 'description'],
  components: {

  }
}
</script>

<style scoped>
.section-detail {
  background: darkslategrey;
  color: black;
  font-family: sans-serif;
  height: 164px;
  box-shadow: rgb(0, 0, 0) 0px 8px 6px 6px;
}

.section-title {
  margin: 16px;
}

.section-button-block {
  display: flex;
  flex-direction: row;
  margin-right: 10px;
}

</style>