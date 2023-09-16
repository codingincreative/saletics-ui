<template>
  <div class="home">
    <img alt="Saletics logo" src="../assets/saletics-logo.png">
    <Intro msg="Introducing Saletics Dashboard"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'

export default {
  name: 'HomeView',
  components: {
    Intro
  }
}
</script>

<style>
  .home img {
    width: 300px;
  }
</style>