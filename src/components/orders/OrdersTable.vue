<template>
  <div class="table-container">
    <table class="orders-table">
      <thead class="orders-table__head">
        <tr>
          <th class="orders-table__head-title">PO Number</th>
          <th class="orders-table__head-title"></th>
          <th class="orders-table__head-title">Product</th>
          <th class="orders-table__head-title">Customer</th>
          <th class="orders-table__head-title">Quantity</th>
          <th class="orders-table__head-title">Price</th>
          <th class="orders-table__head-title">Delivery Date</th>
          <th class="orders-table__head-title">Created On</th>
          <th class="orders-table__head-title">Address</th>
          <th class="orders-table__head-title">Action</th>
        </tr>
      </thead>

      <tbody class="orders-table__body">
        <tr v-for="(data, index) in datas" :key="index">
          <td class="orders-table__body-value value__number">{{ data.poNumber }}</td>
          <td class="orders-table__body-value value__image">
            <img :src="data.image" alt="Product">
          </td>
          <td class="orders-table__body-value value__product">{{ data.name }}</td>
          <td class="orders-table__body-value value__customer">{{ data.customer }}</td>
          <td class="orders-table__body-value value__quantity">{{ data.quantity }}</td>
          <td class="orders-table__body-value value__price">${{ data.price }}</td>
          <td class="orders-table__body-value value__delivery">{{ data.delivery }}</td>
          <td class="orders-table__body-value value__created">{{ data.created }}</td>
          <td class="orders-table__body-value value__address">{{ data.address }}</td>
          <td class="orders-table__body-value value__button">
            <button type="button">Details</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .table-container {
    width: 100%;
    @include media-breakpoint-down(lg-2) {
      overflow-x: auto;
    }
  }

  .orders-table {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    border-radius: 0.25rem;
    border: 1px solid $color-accent;
    @include media-breakpoint-down(lg-2) {
      min-width: 68.0625rem;
    }
    &__head {
      display: flex;
      padding: 1rem;
      align-items: flex-start;
      width: 100%;
      
      border-radius: 0.25rem 0.25rem 0rem 0rem;
      background: $color-accent;
      & tr {
        width: 100%;
        display: flex;
        gap: 1rem;
      }
      &-title {
        color: $color-text;
        font-size: 0.875rem;
        font-weight: 500;
        background: none;
        flex: 1;
      }
    }

    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      
      border-radius: 0 0 0.25rem 0.25rem;
      tr {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: $color-primary;
        &:nth-child(even) {
          background: $color-hover;
        }
      }
      &-value {
        color: $color-text;
        font-size: 0.875rem;
        font-weight: 400;
        background: none;
        flex: 1;

        &.value__number {
          text-align: center;
        }
        &.value__image {
          img {
            width: 5rem;
            height: 5rem;
            border-radius: 0.25rem;
          }
        }
        &.value__price {
          color: $color-text-bullish;
        }
        &.value__address {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          flex: 1 0 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &.value__button {
          button {
            display: flex;
            padding: 0.5rem 0rem;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;

            border-radius: 0.25rem;
            background: $color-secondary;
            outline: none;
            border: none;
            transition: all 0.2s ease;

            color: $color-text;
            text-align: center;
            font-size: 0.875rem;
            font-weight: 400;
            &:hover {
              background: $color-secondary-dark;
            }
          }
        }
      }
    }
  }
</style>