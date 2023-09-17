<template>
  <div class="table-overview">
    <div class="table-overview__head">
      <h6 class="table-overview__head-title">Popular Products</h6>
      <a href="#" class="table-overview__head-link">View All</a>
    </div>

    <div class="table-overview__content-container">
      <table class="table-overview__content">
        <thead class="table-overview__content-head">
          <th></th>
          <th>Name</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Status</th>
        </thead>
  
        <tbody class="table-overview__content-body">
          <tr v-for="(product, index) in products" :key="index">
            <td class="table-overview__content-body__col col--image"><img :src="product.image" :alt="product.name"></td>
            <td class="table-overview__content-body__col col--name">
              <p class="table-overview__content-body__col col--name-product">{{ product.name }}</p>
              <p class="table-overview__content-body__col col--name-id">{{ product.productId }}</p>
            </td>
            <td class="table-overview__content-body__col col--category"><p>{{ product.category }}</p></td>
            <td class="table-overview__content-body__col col--brand"><p>{{ product.brand }}</p></td>
            <td class="table-overview__content-body__col col--price"><p>${{ product.price }}</p></td>
            <td class="table-overview__content-body__col col--status">
              <p class="table-overview__content-body__col col--status-type">{{ product.statusType }}</p>
              <p class="table-overview__content-body__col col--status-stock">{{ product.statusStock }} in stock</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { image: require('@/assets/image/product-1.png'), name: 'Men’s Shirt Casual', productId: '#BLW71N7', category: 'Shirt', brand: 'Yves Saint Laurent', price: '10.00', statusType: 'Available', statusStock: '100'},
        { image: require('@/assets/image/product-2.png'), name: 'Men’s Long Trousers', productId: '#BLW71N7', category: 'Trousers', brand: 'Guess', price: '9.50', statusType: 'Available', statusStock: '80'},
        { image: require('@/assets/image/product-3.png'), name: 'Men’s Black T-Shirt', productId: '#BLW71N7', category: 'T-Shirt', brand: 'Executive', price: '10.00', statusType: 'Available', statusStock: '200'},
        { image: require('@/assets/image/product-1.png'), name: 'Men’s Shirt Casual', productId: '#BLW71N7', category: 'Shirt', brand: 'Yves Saint Laurent', price: '10.00', statusType: 'Available', statusStock: '100'},
      ]
    }
  }
}
</script>

<style lang="scss">
  .table-overview {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    border-radius: 0.5rem;
    border: 1px solid $color-accent;
    @include media-breakpoint-down(md) {
      align-items: flex-start;
    }
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      &-title {
        font-size: 1rem;
        font-weight: 600;
      }
      &-link {
        color: $color-secondary;
        font-size: 1rem;
        font-weight: 600;
      }
    }

    &__content-container {
      width: 100%;
      @include media-breakpoint-down(md) {
        overflow-x: auto;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      border-radius: 0.5rem;
      border: 1px solid $color-accent;
      @include media-breakpoint-down(md) {
        width: 43rem;
      }
      &-head {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        width: 100%;

        border-radius: 0.5rem 0.5rem 0rem 0rem;
        background: $color-accent;
        th {
          width: 100%;

          &:first-child {
            max-width: 5rem;
          }
        }
      }

      &-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        tr {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          align-items: center;
          width: 100%;
          &:nth-child(even) {
            background-color: $color-hover;
          }
        }
        &__col {
          width: 100%;

          &.col--image {
            max-width: 5rem;
            img {
              width: 5rem;
              height: 5rem;
              border-radius: 0.25rem;
            }
          }

          &.col--name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 0.25rem;
            &-product {
              color: $color-text;
              font-size: 0.875rem;
              font-weight: 400;
            }
            &-id {
              color: $color-text-secondary;
              font-size: 0.75rem;
              font-weight: 400;
            }
          }

          &.col--category,
          &.col--brand {
            color: $color-text;
            font-size: 0.875rem;
            font-weight: 400;
          }

          &.col--price {
            color: $color-text-bullish;
            font-size: 0.875rem;
            font-weight: 400;
          }

          &.col--status {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.25rem;
            &-type {
              color: $color-text;
              font-size: 0.875rem;
              font-weight: 400;
            }
            &-stock {
              color: $color-text-secondary;
              font-size: 0.75rem;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
</style>