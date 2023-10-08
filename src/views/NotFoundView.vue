<template>
  <div class="not-found">
    <h2>Did you lost?</h2>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.not-found {
  margin: 2rem auto;
  padding: 1.5rem;
  max-width: 768px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background: $color-hover;
  border: 1px solid $color-accent;
  border-radius: 0.25rem;

  a {
    display: flex;
    padding: 0.5rem 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 0.25rem;
    background: $color-secondary;
    color: $color-text;
    transition: 0.2s all ease;
    &:hover {
      background: $color-secondary-dark;
    }
    &::after {
      display: none;
    }
  }
}
</style>