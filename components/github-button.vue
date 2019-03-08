<template>
<a class="github-button" v-bind:href="url" target="_blank"><div class="github-button-text">View on GitHub </div><img class="github-button-image" src="/assets/icons/github.svg"></a>
</template>

<script>
module.exports = {
  props: ['url']
}
</script>

<style scoped>
.github-button {
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  margin-left: 16px;
  color: black;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  padding: 5px;
  color: white;
}

.github-button-text {
  transform: translateY(2px);
}

.github-button-image {
  height: 32px;
  margin-left: 6px;
  color: white;
}
</style>
