<template>
  <div class="product-card">
    <img :src="productImage" :alt="`${productName} Product`" class="product-card__image">
    <div class="product-card__group">
      <div class="product-card__group__badge">{{ productCategory }}</div>
      <p class="product-card__group__id">{{ productId }}</p>
    </div>
    <div class="product-card__name">
      <p class="product-card__name-title">{{ productName }}</p>
      <p class="product-card__name-brand">{{ productBrand }}</p>
    </div>
    <div class="product-card__group">
      <div class="product-card__group__price">${{ productPrice }}</div>
      <p class="product-card__group__stock">{{ producStock }} in stock</p>
    </div>
    <button type="button" class="product-card__button">Manage</button>
  </div>
</template>

<script>
export default {
  props: {
    productImage: String,
    productCategory: String,
    productId: String,
    productName: String,
    productBrand: String,
    productPrice: String,
    producStock: Number,
  }
}
</script>

<style lang="scss">
  .product-card {
    display: flex;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;

    border-radius: 0.5rem;
    border: 1px solid $color-accent;
    transition: all 0.2s ease;
    &:hover {
      border: 1px solid $color-secondary;
    }
    &__image {
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      border-radius: 0.25rem;
    }
    &__group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      &__badge {
        display: flex;
        width: 4.75rem;
        padding: 0.25rem 0.5rem;
        justify-content: center;

        border-radius: 0.25rem;
        border: 1px solid $color-accent;
        background: $color-hover;

        text-align: center;
        font-size: 0.75rem;
        font-weight: 400;
      }
      &__id {
        color: $color-text-secondary;
        font-size: 0.75rem;
        font-weight: 400;
      }
      &__price {
        color: $color-text-bullish;
        font-size: 0.875rem;
        font-weight: 400;
      }
      &__stock {
        color: $color-text-secondary;
        font-size: 0.75rem;
        font-weight: 400;
      }
    }
    &__name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.25rem;
      &-title {
        font-size: 1rem;
        font-weight: 600;
      }
      &-brand {
        color: $color-text-secondary;
        font-size: 0.75rem;
        font-weight: 400;
      }
    }
    &__button {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      gap: 0.625rem;
      width: 100%;

      border-radius: 0.25rem;
      background: $color-secondary;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;

      color: $color-text;
      text-align: center;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        background: $color-secondary-dark;
      }
    }
  }
</style>