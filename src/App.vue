<template>
  <router-view/>
</template>

<style lang="scss">
  #app {
    display: flex;
    @include media-breakpoint-down(xxl) {
      flex-direction: column;
      gap: 1.5rem;
    }
    @include media-breakpoint-down(sm) {
      gap: 1rem;
    }
  }
</style>