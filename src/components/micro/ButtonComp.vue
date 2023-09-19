<template>
  <button class="main-button" type="button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button"
    }
  }
}
</script>

<style lang="scss">
  .main-button {
    display: flex;
    padding: 0.5rem 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 0.25rem;
    background: $color-secondary;
    outline: none;
    border: none;
    transition: all 0.2s ease;

    color: $color-text;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    text-wrap: nowrap;
    &:hover {
      background: $color-secondary-dark;
    }
  }
</style>