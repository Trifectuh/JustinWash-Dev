<template>
<div class="navigation-bar">
  <router-link to="/" class="navigation-link">home</router-link>
  <router-link to="/work" class="navigation-link">work</router-link>
  <router-link to="/play" class="navigation-link">play</router-link>
  <router-link to="/about" class="navigation-link">about</router-link>
  <router-link to="/contact" class="navigation-link">contact</router-link>
</div>
</template>

<style scoped>
.navigation-bar {
  background: lightblue;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  top: 0
}

.navigation-link {
  margin: 10px;
  font-size: 2em;
  text-decoration: none;
  font-weight: bold;
  font-family: sans-serif;
}
</style>
