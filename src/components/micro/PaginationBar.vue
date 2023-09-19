<template>
  <div class="pagination">
    <div class="pagination__show">
      <p class="pagination__show-text">Show Per Page</p>
      <Dropdown 
        :values="itemsPerPage"
        top
      />
    </div>

    <div class="pagination__page">
      <img src="../../assets/icon/chevron-left.svg" alt="Chevron Left" class="pagination__page--left-nav">
      <p class="pagination__page-number active">1</p>
      <p class="pagination__page-number">2</p>
      <p class="pagination__page-number">3</p>
      <p class="pagination__page-number">...</p>
      <img src="../../assets/icon/chevron-right.svg" alt="Chevron Right" class="pagination__page--right-nav">
    </div>
  </div>
</template>

<script>
import Dropdown from './DropdownBox';

export default {
  props: {
    itemsPerPage: {
      type: Array,
      required: true
    }
  },
  components: { Dropdown }
}
</script>

<style lang="scss">
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    &__show {
      display: flex;
      align-items: center;
      gap: 1rem;
      &-text {
        font-size: 0.875rem;
        font-weight: 600;
        @include media-breakpoint-down(xs-3) {
          display: none;
        }
      }
    }

    &__page {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      &--left-nav,
      &--right-nav {
        width: 1.5rem;
        height: 1.5rem;
      }
      &-number {
        font-size: 0.875rem;
        font-weight: 600;
        &.active {
          color: $color-secondary;
        }
      }
    }
  }
</style>