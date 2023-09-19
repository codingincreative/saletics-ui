<template>
  <div class="search">
    <input type="text" class="search__bar" :placeholder="`Search ${searchValue}`">
  </div>
</template>

<script>
export default {
  props: {
    searchValue: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss">
  .search {
    position: relative;
    @include media-breakpoint-down(md) {
      width: 100%;
    }
    &__bar {
      display: flex;
      width: 25rem;
      padding: 0.75rem 0.75rem 0.75rem 2.5rem;
      align-items: center;
      gap: 0.5rem;
  
      border-radius: 0.25rem;
      border: 1px solid $color-accent;
      background: $color-hover;
      outline: none;
      transition: border 0.2s ease;

      color: $color-text;
      font-size: 0.875rem;
      font-weight: 400;

      &:focus, &:hover, &:active, &:focus-visible, &:focus-within {
        border: 1px solid $color-secondary;
      }

      @include media-breakpoint-down(md) {
        width: 100%;
      }
    }

    &::before {
      content: url('../../assets/icon/search.svg');
      display: inline-block;
      position: absolute;
      transform: translateY(50%);
      margin-left: 0.75rem;
    }
  }
</style>