<template>
  <div class="company-info">
    <div class="company-info__head">
      <div class="company-info__head-nav">
        <div class="company-info__head-nav__notification">
          <NotificationButton right />
        </div>

        <div class="company-info__head-nav__edit">
          <img src="../assets/icon/company-info/edit.svg" alt="Edit Icon">
        </div>
      </div>

      <img :src="companyImage" alt="Company Image" class="company-info__head-company-image">

      <h3 class="company-info__head-company-name">{{ companyName }}</h3>
    </div>

    <div class="company-info__info">
      <div class="company-info__info-group">
        <img src="../assets/icon/report-card/total-sales.svg" alt="Products Icon">
        <div class="company-info__info-group-text">
          <h6>12</h6>
          <p>Products</p>
        </div>
      </div>
      <div class="company-info__info-group">
        <img src="../assets/icon/report-card/total-visitors.svg" alt="Employee Icon">
        <div class="company-info__info-group-text">
          <h6>8</h6>
          <p>Employees</p>
        </div>
      </div>
    </div>

    <div class="company-info__order">
      <div class="company-info__order-head">
        <p class="company-info__order-head-title">Recent Orders</p>
        <a href="#" class="company-info__order-head-link">View All Orders</a>
      </div>

      <div class="company-info__order-group">
        <div class="company-info__order-list" v-for="(order, index) in orders" :key="index">
          <img :src="order.orderImg" alt="Order Product">
          <div class="company-info__order-list-detail">
            <div class="company-info__order-list-detail-main">
              <p class="detail-main__name">{{ order.orderName }}</p>
              <p class="detail-main__price">${{ order.orderPrice }}</p>
            </div>
            <div class="company-info__order-list-detail-secondary">
              <p class="detail-secondary__quantity">Quantity : {{ order.orderQuantity }}</p>
              <p class="detail-secondary__time">{{ order.orderTime }} ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product1 from '@/assets/image/product-1.png'
import Product2 from '@/assets/image/product-2.png'
import Product3 from '@/assets/image/product-3.png'
import CompanyImage from '@/assets/icon/company-info/company-icon.svg'

import NotificationButton from '@/components/micro/NotificationButton'

export default {
  components: { NotificationButton },
  data() {
    return {
      companyImage: CompanyImage,
      companyName: 'Fashionys Collection',
      orders: [
        { orderImg: Product1, orderName: 'Men’s Shirt Casual', orderPrice: '10.00', orderQuantity: '1', orderTime: '1 minutes' },
        { orderImg: Product2, orderName: 'Men’s Long Trousers', orderPrice: '9.50', orderQuantity: '1', orderTime: '20 minutes' },
        { orderImg: Product3, orderName: 'Men’s Black T-Shirt', orderPrice: '20.00', orderQuantity: '2', orderTime: '1 hours' },
        { orderImg: Product2, orderName: 'Men’s Long Trousers', orderPrice: '19.00', orderQuantity: '2', orderTime: '1 hours' },
        { orderImg: Product1, orderName: 'Men’s Shirt Casual', orderPrice: '10.00', orderQuantity: '1', orderTime: '3 hours' },
        { orderImg: Product3, orderName: 'Men’s Black T-Shirt', orderPrice: '10.00', orderQuantity: '1', orderTime: '5 hours' },
        { orderImg: Product1, orderName: 'Men’s Shirt Casual', orderPrice: '10.00', orderQuantity: '1', orderTime: '5 hours' },
        { orderImg: Product1, orderName: 'Men’s Shirt Casual', orderPrice: '10.00', orderQuantity: '1', orderTime: '7 hours' },
      ],
    }
  }
}
</script>

<style lang="scss">
  .company-info {
    display: flex;
    max-width: 23.125rem;
    width: 100%;
    height: calc(100vh - 6rem);
    padding: 0 1.5rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: fixed;
    right: 0;
    background-color: $color-primary;
    overflow: hidden;

    border-left: 1px solid $color-accent;

    @include media-breakpoint-down(xxl) {
      max-width: unset;
      width: unset;
      height: unset;
      position: static;
      border-left: none;

      border: 1px solid $color-accent;
      border-radius: 0.5rem;
      margin: 0 1.5rem 0 18.5rem;
      padding: 1rem;
    }
    @include media-breakpoint-down(lg) {
      width: 100%;
      margin-left: 0;
      margin-bottom: 1.5rem;
    }
    @include media-breakpoint-down(sm) {
      width: 100%;
      margin-left: 0;
      margin-bottom: 1rem;
    }

    &__head {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 1rem;
      &-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        position: relative;
        @include media-breakpoint-down(lg) {
          justify-content: flex-end;
        }
        &__notification {
          @include media-breakpoint-down(lg) {
            display: none;
          }
        }
        &__edit {
          display: flex;
          padding: 0.75rem;
          justify-content: center;
          align-items: center;
          gap: 0.625rem;
          border-radius: 1.875rem;
          border: 1px solid $color-accent;
          background: $color-hover;
          cursor: pointer;
          transition: all 0.2s linear;
          &:hover {
            border: 1px solid $color-secondary;
          }
        }
      }
      &-company-image {
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 50%;
        border: 1px solid $color-accent;
      }
      &-company-name {
        color: $color-text;
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    &__info {
      display: flex;
      padding: 0.5rem;
      gap: 0.5rem;
      width: 100%;

      border-radius: 0.5rem;
      border: 1px solid $color-accent;
      background: $color-primary;
      &-group {
        display: flex;
        padding: 0.75rem;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;

        border-radius: 0.25rem;
        border: 1px solid $color-accent;
        background: $color-hover;
        @include media-breakpoint-down(xs-2) {
          padding: 0.5rem;
        }
        &-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.125rem;
          h6 {
            font-size: 1rem;
            font-weight: 600;
          }
          p {
            color: $color-text-secondary;
            font-size: 0.875rem;
            font-weight: 400;
          }
        }
      }
    }

    &__order {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;

      height: 0;
      flex: 1;
      &-head {
        display: flex;
        justify-content: space-between;
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

      &-group {
        display: flex;
        padding: 1rem;
        flex-direction: column;
        gap: 1.25rem;
        width: 100%;

        border-radius: 0.5rem;
        border: 1px solid $color-accent;
        background: $color-primary;
        overflow: auto;
        @include media-breakpoint-down(xxl) {
          max-height: 402px;
        }
        @include media-breakpoint-down(xs-2) {
          padding: 0.5rem;
        }

        /* width */
        &::-webkit-scrollbar {
          width: 3px;
        }
      }

      &-list {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
        @include media-breakpoint-down(xs-2) {
          gap: 0.5rem;
        }
        img {
          width: 3.75rem;
          height: 3.75rem;
          border-radius: 0.25rem;
        }
        &-detail {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          &-main {
            display: flex;
            justify-content: space-between;
            width: 100%;
            & .detail-main__name {
              display: -webkit-box;
              width: 7.875rem;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              text-overflow: ellipsis;

              font-size: 0.875rem;
              font-weight: 600;
            }
            & .detail-main__price {
              color: $color-text-bullish;
              font-size: 0.875rem;
              font-weight: 600;
            }
          }
          &-secondary {
            display: flex;
            justify-content: space-between;
            width: 100%;
            & .detail-secondary__quantity,
            & .detail-secondary__time  {
              color: $color-text-secondary;
              font-size: 0.75rem;
              font-weight: 600;
            } 
          }
        }
      }
    }
  }

  // Notification Reveal Transition
  .notifReveal-enter-active,
  .notifReveal-leave-active {
    transition: all 0.2s ease;
  }

  .notifReveal-enter-from,
  .notifReveal-leave-to {
    transform: translateY(-1.5rem);
    opacity: 0;
  }
</style>