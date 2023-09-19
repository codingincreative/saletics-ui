<template>
  <div class="analytics-table">
    <table class="analytics-table__content">
      <thead class="analytics-table__content-head">
        <th>Date</th>
        <th>Sold Products</th>
        <th>Total Income</th>
        <th>Action</th>
      </thead>

      <tbody class="analytics-table__content-body">
        <tr v-for="data in datas" :key="data.date">
          <td class="analytics-table__content-body__col col--date">{{ data.date }}</td>
          <td class="analytics-table__content-body__col col--sold">{{ data.soldProduct }}</td>
          <td class="analytics-table__content-body__col col--income">${{ data.income }}</td>
          <td class="analytics-table__content-body__col col--button">
            <Button text="Details" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Button from '@/components/micro/ButtonComp'

export default {
  components: { Button },
  props: {
    datas: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .analytics-table {
    width: 100%;
    @include media-breakpoint-down(lg-2) {
      overflow-x: auto;
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
  
      border-radius: 0.25rem;
      border: 1px solid $color-accent;
      @include media-breakpoint-down(lg-2) {
        min-width: 68.0625rem;
      }
      &-head {
        display: flex;
        padding: 1rem;
        align-items: flex-start;
        width: 100%;
        
        border-radius: 0.25rem 0.25rem 0rem 0rem;
        background: $color-accent;
        gap: 1rem;
        & th {
          color: $color-text;
          font-size: 0.875rem;
          font-weight: 500;
          background: none;
          flex: 1;
        }
      }
  
      &-body {
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
        &__col {
          color: $color-text;
          font-size: 0.875rem;
          font-weight: 400;
          background: none;
          flex: 1;
          &.col--income {
            color: $color-text-bullish;
          }
        }
      }
    }
  }

</style>