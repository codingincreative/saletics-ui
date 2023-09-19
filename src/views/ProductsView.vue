<template>
  <MenuBar />
  <!-- BaseLayout Component -->
  <BaseLayout layoutName="Products">
    <!-- Code goes here -->
    <div class="products">
      <div class="products__head">
        <p class="products__head-title">Products Catalogue</p>
        <div class="products__head-right-nav">
          <SearchBar searchValue="Products" />
          <div class="products__head-filter">
            <img src="../assets/icon/filter.svg" alt="Filter Icon">
          </div>
          <div class="products__head-view">
            <div class="products__head-view--list">
              <img src="../assets/icon/view-list.svg" alt="View List Icon">
            </div>
            <div class="products__head-view--grid active">
              <img src="../assets/icon/view-grid.svg" alt="View Grid Icon">
            </div>
          </div>
        </div>
      </div>

      <div class="products__content">
        <ProductCard
          v-for="product in products" :key="product.id"
          :productImage="product.image"
          :productCategory="product.category"
          :productId="product.id"
          :productName="product.name"
          :productBrand="product.brand"
          :productPrice="product.price"
          :producStock="product.stock"
        />
      </div>

      <PaginationBar :itemsPerPage="[8, 16, 32, 42, 80]" />
    </div>
  </BaseLayout>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import BaseLayout from '@/components/BaseLayout'
import SearchBar from '@/components/micro/SearchBar'
import PaginationBar from '@/components/micro/PaginationBar'
import ProductCard from '@/components/products/ProductCard'

import Product1 from '@/assets/image/product-1.png'
import Product2 from '@/assets/image/product-2.png'
import Product3 from '@/assets/image/product-3.png'

export default {
  components: { MenuBar, BaseLayout, SearchBar, PaginationBar, ProductCard },
  data() {
    return {
      products: [
        { image: Product1, category: 'Shirt', id: '#BLW71N7', name: "Men’s Shirt Casual", brand: 'Yves Saint Laurent', price: '10.00', stock: 100 },
        { image: Product2, category: 'Trousers', id: '#BLW72U9', name: "Men’s Long Trousers", brand: 'Guess', price: '9.50', stock: 100 },
        { image: Product3, category: 'T-Shirt', id: '#BLW79IA', name: "Men’s Black T-Shirt", brand: 'Executive', price: '10.00', stock: 100 },
        { image: Product1, category: 'Shirt', id: '#BLW70PF', name: "Men’s Shirt Casual", brand: 'Yves Saint Laurent', price: '10.00', stock: 100 },
        { image: Product1, category: 'Shirt', id: '#BLW7GHJ', name: "Men’s Shirt Casual", brand: 'Yves Saint Laurent', price: '10.00', stock: 100 },
        { image: Product2, category: 'Trousers', id: '#BLW7N7M', name: "Men’s Long Trousers", brand: 'Guess', price: '9.50', stock: 100 },
        { image: Product3, category: 'T-Shirt', id: '#BLW7NBM', name: "Men’s Black T-Shirt", brand: 'Executive', price: '10.00', stock: 100 },
        { image: Product1, category: 'Shirt', id: '#BLW7V7G', name: "Men’s Shirt Casual", brand: 'Yves Saint Laurent', price: '10.00', stock: 100 },
      ]
    }
  }
}
</script>

<style lang="scss">
  .products {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    border-radius: 0.5rem;
    border: 1px solid $color-accent;
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      @include media-breakpoint-down(md) {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }
      &-title {
        font-size: 1rem;
        font-weight: 600;
      }

      &-right-nav {
        display: flex;
        align-items: center;
        gap: 1rem;
        @include media-breakpoint-down(xs-3) {
          flex-wrap: wrap;
        }
      }

      &-filter {
        display: flex;
        padding: 0.5rem;
        align-items: center;
        border-radius: 0.25rem;
        border: 1px solid $color-accent;
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: $color-secondary;
        }
        @include media-breakpoint-down(xs-3) {
          flex: 1;
          justify-content: center;
        }
        img {
          width: 1.875rem;
          height: 1.875rem;
        }
      }

      &-view {
        display: flex;
        padding: 0.25rem;
        align-items: center;
        gap: 0.25rem;
        border-radius: 0.25rem;
        border: 1px solid $color-accent;
        &--grid,
        &--list {
          display: flex;
          padding: 0.25rem;
          align-items: center;
          gap: 5.875rem;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: all 0.2s ease;
          &:hover {
            background-color: $color-secondary;
          }
          &.active {
            background-color: $color-secondary;
          }
        }
      }
    }

    &__content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(16.26563rem, 1fr));
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
    }
  }
</style>