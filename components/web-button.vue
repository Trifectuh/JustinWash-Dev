<template>
  <a class="web-button" v-bind:href="url" target="_blank"><span>View on the web </span><img class="web-button-image" src="/assets/icons/web.svg"></a>
</template>

<script>
module.exports = {
  props: ['url']
}
</script>

<style scoped>
.web-button {
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  color: black;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  padding: 5px;
  color: white;
}

span { 
  transform: translateY(2px);
}

.web-button-image {
  height: 30px;
  margin-left: 6px;
}
</style>