<template>
  <MenuBar />
  <!-- BaseLayout Component -->
  <BaseLayout layoutName="Shipment">
    <!-- Code goes here -->
    <div class="shipment">
      <div class="shipment__head">
        <p class="shipment__head-title">Shipment Tracker</p>
        <SearchBar searchValue="Shipment" />
      </div>

      <div class="shipment__table-container">
        <table class="shipment__table">
          <thead class="shipment__table-head">
            <th>ID Number</th>
            <th>Customer</th>
            <th>Services</th>
            <th>Weight</th>
            <th>Date</th>
            <th>Delivery Date</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </thead>

          <tbody class="shipment__table-body">
            <tr v-for="shipment in shipments" :key="shipment.id">
              <td class="shipment__table-body-col col--number">{{ shipment.id }}</td>
              <td class="shipment__table-body-col">{{ shipment.customer }}</td>
              <td class="shipment__table-body-col">{{ shipment.services }}</td>
              <td class="shipment__table-body-col">{{ shipment.weight }}</td>
              <td class="shipment__table-body-col">{{ shipment.date }}</td>
              <td class="shipment__table-body-col">{{ shipment.delivery }}</td>
              <td class="shipment__table-body-col col--address">{{ shipment.address }}</td>
              <td class="shipment__table-body-col col--status">
                <div v-if="shipment.status === 'Processing'" class="shipment__badge processing">{{ shipment.status }}</div>
                <div v-if="shipment.status === 'On The Way'" class="shipment__badge on-the-way">{{ shipment.status }}</div>
                <div v-if="shipment.status === 'Arrived'" class="shipment__badge arrived">{{ shipment.status }}</div>
              </td>
              <td class="shipment__table-body-col">
                <Button text="Details" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <PaginationBar :itemsPerPage="[10, 20, 40, 60]" />
    </div>
  </BaseLayout>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import BaseLayout from '@/components/BaseLayout'
import SearchBar from '@/components/micro/SearchBar'
import PaginationBar from '@/components/micro/PaginationBar'
import Button from '@/components/micro/ButtonComp'

export default {
  components: { MenuBar, BaseLayout, SearchBar, PaginationBar, Button },
  data() {
    return {
      shipments: [
        { id: 77, customer: 'John Doe', services: 'Amazon', weight: '2.10kg', date: '10/06/2023', delivery: '12/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068', status: 'Processing' },
        { id: 78, customer: 'James Cook', services: 'UPS', weight: '5.0kg', date: '10/06/2023', delivery: '12/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068', status: 'On The Way' },
        { id: 79, customer: 'Quentin', services: 'Amazon', weight: '4.10kg', date: '10/06/2023', delivery: '12/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068', status: 'Processing' },
        { id: 80, customer: 'Alex Tate', services: 'Amazon', weight: '2.10kg', date: '10/06/2023', delivery: '12/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068', status: 'Arrived' },
        { id: 81, customer: 'Dave Bross', services: 'FedEx', weight: '7.0kg', date: '10/06/2023', delivery: '12/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068', status: 'On The Way' },
        { id: 82, customer: 'Blaire Cate', services: 'FedEx', weight: '2.10kg', date: '10/06/2023', delivery: '12/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068', status: 'Arrived' },
        { id: 83, customer: 'Cade Brian', services: 'Amazon', weight: '8.10kg', date: '10/06/2023', delivery: '12/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068', status: 'Processing' },
        { id: 84, customer: 'Yang Xi', services: 'Amazon', weight: '5.0kg', date: '10/06/2023', delivery: '12/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068', status: 'On The Way' },
        { id: 85, customer: 'Omar As’ad', services: 'UPS', weight: '10.0kg', date: '10/06/2023', delivery: '12/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068', status: 'Arrived' },
        { id: 86, customer: 'Hans Quebec', services: 'FedEx', weight: '2.10kg', date: '10/06/2023', delivery: '12/06/2023', address: '27072 SW Campbell Ln, West Linn, OR, 97068', status: 'Arrived' },
      ]
    }
  }
}
</script>

<style lang="scss">
  .shipment {
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

    &__table-container{
      width: 100%;
      @include media-breakpoint-down(lg-2) {
        overflow-x: auto;
      }
    }
    &__table {
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
        &-col {
          color: $color-text;
          font-size: 0.875rem;
          font-weight: 400;
          background: none;
          flex: 1;
          &.col--number {
            text-align: center;
          }

          &.col--address {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            flex: 1 0 0;
            overflow: hidden;
            text-overflow: ellipsis;
          }
  
          &.col--status {
            & .shipment__badge {
              display: flex;
              padding: 0.5rem;
              justify-content: center;
              align-items: center;
  
              border-radius: 0.25rem;
              border: 1px solid $color-accent;
              background: $color-hover;
  
              font-size: 0.875rem;
              font-weight: 400;
              &.processing {
                color: $color-secondary;
              }
              &.on-the-way {
                color: #FC7A30;
              }
              &.arrived {
                color: $color-text-bullish;
              }
            }
          }
        }

      }
    }
  }
</style>