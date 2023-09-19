<template>
  <MenuBar />
  <!-- BaseLayout Component -->
  <BaseLayout layoutName="Analytics">
    <!-- Code goes here -->
    <div class="analytics">
      <div class="analytics__chart-group">
        <div class="analytics__chart--line"><SalesGrowthChart /></div>
        <div class="analytics__chart--pie"><MonthlyVisitorsChart /></div>
      </div>

      <TotalOrdersChart />

      <AnalyticsTable :datas="reports" />
    </div>
  </BaseLayout>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import BaseLayout from '@/components/BaseLayout'
import SalesGrowthChart from '@/components/overview/SalesGrowthChart'
import MonthlyVisitorsChart from '@/components/analytics/MonthlyVisitorsChart'
import TotalOrdersChart from '@/components/analytics/TotalOrdersChart'
import AnalyticsTable from '@/components/analytics/AnalyticsTable'

export default {  
  components: { MenuBar, BaseLayout, SalesGrowthChart, MonthlyVisitorsChart, TotalOrdersChart, AnalyticsTable },
  data() { 
    return {
      reports: [
        { date: '15 Juny 2023', soldProduct: '1,000', income: '800.00' },
        { date: '14 Juny 2023', soldProduct: '800', income: '500.00' },
        { date: '13 Juny 2023', soldProduct: '200', income: '100.00' },
        { date: '12 Juny 2023', soldProduct: '500', income: '200.00' },
        { date: '11 Juny 2023', soldProduct: '1,500', income: '1,000.00' },
        { date: '10 Juny 2023', soldProduct: '2,000', income: '1,600.00' },
      ]
    }
  }
}
</script>

<style lang="scss">
  .analytics {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    &__chart-group {
      display: flex;
      align-items: stretch;
      gap: 1.5rem;
      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
    }

    &__chart {
      &--line { flex: 1; }
      &--pie { 
        width: 17.4375rem;
        @include media-breakpoint-down(md) {
          width: 100%;
        }
      }
    }
  }
</style>