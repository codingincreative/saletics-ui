<template>
  <MenuBar />
  <div class="overview">
    <h1 class="overview__title">Overview</h1>
    <div class="overview__card-report">
      <ReportCard 
        :image="require('@/assets/icon/report-card/total-sales.svg')" 
        altImage="Total Sales Icon"
        percent="+15%"
        bullish
        currency="$30,250.00"
        totalName="Total Sales" 
      />
      <ReportCard 
        :image="require('@/assets/icon/report-card/total-expenses.svg')" 
        altImage="Total Expenses Icon"
        percent="-20%"
        bearish
        currency="$30,250.00"
        totalName="Total Expenses" 
      />
      <ReportCard 
        :image="require('@/assets/icon/report-card/total-visitors.svg')" 
        altImage="Total Visitors Icon"
        percent="+35%"
        bullish
        currency="10,250.00"
        totalName="Total Visitors" 
      />
      <ReportCard 
        :image="require('@/assets/icon/report-card/total-orders.svg')" 
        altImage="Total Orders Icon"
        percent="-5%"
        bearish
        currency="20,250.00"
        totalName="Total Orders" 
      />
    </div>
    <SalesGrowthChart />
    <TableDataOverview />
  </div>
  <CompanyInfo />
</template>

<script>
import MenuBar from '@/components/MenuBar'
import ReportCard from '@/components/ReportCard'
import SalesGrowthChart from '@/components/SalesGrowthChart'
import TableDataOverview from '@/components/TableDataOverview'
import CompanyInfo from '@/components/CompanyInfo'

export default {
  components: { MenuBar, ReportCard, SalesGrowthChart, TableDataOverview, CompanyInfo }
}
</script>

<style lang="scss">
  .overview {
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    margin-left: 17rem;
    margin-right: 23.125rem;
    @include media-breakpoint-down(xxl) {
      width: unset;
      margin-right: 0;
    }
    @include media-breakpoint-down(lg) {
      margin: 6.5rem 0 0 0;
      padding: 0;
    }
    @include media-breakpoint-down(sm) {
      margin: 6rem 0 0 0;
      gap: 1rem;
    }
    &__title {
      color: $color-text;
      font-size: 1.5rem;
      font-weight: 700;
    }
    &__card-report {
      display: flex;
      gap: 1rem;
      @include media-breakpoint-down(md) {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      @include media-breakpoint-down(xs-2) {
        gap: 0.5rem;
      }
    }
  }
</style>