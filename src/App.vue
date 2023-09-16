<template>
  <img src="./assets/saletics-logo-mark.png" alt="Saletics Logo Mark" class="saletics-logo-mark">
  <router-view/>
</template>

<style lang="scss">
body {
  background-color: #161C24;
}

#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

.saletics-logo-mark {
  margin: 24px 0;
  width: 150px;
}
</style>
