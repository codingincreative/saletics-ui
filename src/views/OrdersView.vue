<template>
  <MenuBar />
  <!-- BaseLayout Component -->
  <BaseLayout layoutName="Orders">
    <!-- Code goes here -->
    <div class="orders">
      <div class="orders__head">
        <p class="orders__head-title">Customer Orders</p>
        <SearchBar searchValue="Order" />
      </div>

      <div class="orders__content">
        <OrdersTable :datas="orders" />
      </div>

      <PaginationBar :itemsPerPage="[10, 20, 40, 60]" />
    </div>
  </BaseLayout>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import BaseLayout from '@/components/BaseLayout'
import SearchBar from '@/components/micro/SearchBar'
import OrdersTable from '@/components/orders/OrdersTable'
import PaginationBar from '@/components/micro/PaginationBar'

import Product1 from '@/assets/image/product-1.png'
import Product2 from '@/assets/image/product-2.png'
import Product3 from '@/assets/image/product-3.png'

export default {

  components: { MenuBar, BaseLayout, SearchBar, OrdersTable, PaginationBar },
  data() { 
    return {
      orders: [
        { poNumber: 77, image: Product1, name: "Men's Shirt Casual", customer: 'John Doe', quantity: 5, price: '50.00', delivery: '12/06/2023', created: '10/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068' },
        { poNumber: 77, image: Product2, name: "Men's Long Trousers", customer: 'John Doe', quantity: 5, price: '50.00', delivery: '12/06/2023', created: '10/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068' },
        { poNumber: 77, image: Product1, name: "Men's Shirt Casual", customer: 'John Doe', quantity: 5, price: '50.00', delivery: '12/06/2023', created: '10/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068' },
        { poNumber: 77, image: Product3, name: "Men's Black T-Shirt", customer: 'John Doe', quantity: 5, price: '50.00', delivery: '12/06/2023', created: '10/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068' },
        { poNumber: 77, image: Product2, name: "Men's Long Trousers", customer: 'John Doe', quantity: 5, price: '50.00', delivery: '12/06/2023', created: '10/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068' },
        { poNumber: 77, image: Product2, name: "Men's Long Trousers", customer: 'John Doe', quantity: 5, price: '50.00', delivery: '12/06/2023', created: '10/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068' },
        { poNumber: 77, image: Product3, name: "Men's Black T-Shirt", customer: 'John Doe', quantity: 5, price: '50.00', delivery: '12/06/2023', created: '10/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068' },
        { poNumber: 77, image: Product1, name: "Men's Shirt Casual", customer: 'John Doe', quantity: 5, price: '50.00', delivery: '12/06/2023', created: '10/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068' },
        { poNumber: 77, image: Product2, name: "Men's Long Trousers", customer: 'John Doe', quantity: 5, price: '50.00', delivery: '12/06/2023', created: '10/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068' },
        { poNumber: 77, image: Product3, name: "Men's Black T-Shirt", customer: 'John Doe', quantity: 5, price: '50.00', delivery: '12/06/2023', created: '10/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068' },
      ]
    }
  }
}
</script>

<style lang="scss">
  .orders {
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
    }

    &__content {
      width: 100%;
    }
  }
</style>