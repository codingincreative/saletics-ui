<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Saletics is a analytics dashboard for maintaining your products, employees, stocks, and even make business growth decisions.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: #D6D6D6;
}

p {
  max-width: 500px;
  margin: 0 auto;
  color: #6C727F;
}
</style>
