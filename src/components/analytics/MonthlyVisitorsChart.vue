<template>
  <div class="visitors">
    <div class="visitors__title">
      <p>Monthly Visitors</p>
    </div>

    <div class="visitors__chart-container">
      <div id="visitors-chart">
        <apexchart 
          type="pie" 
          width="100%" 
          height="auto"
          :options="chartOptions" 
          :series="series">
        </apexchart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [72, 28],
      chartOptions: {
        chart: {
          type: 'pie',
        },
        colors: ['#2370F8', '#0856D8'],
        legend: {
          position: 'bottom',
          fontSize: '12px',
          fontFamily: 'Inter, Helvetica, Arial, sans-serif',
          fontWeight: '400',
          labels: {
            colors: ['#D6D6D6', '#D6D6D6']
          }
        },
        stroke: {
          colors: '#161C24'
        },
        dataLabels: {
          style: {
            fontSize: '16px',
            fontFamily: 'Inter, Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            colors: ['#D6D6D6']
          }
        },
        labels: ['Desktop', 'Mobile'],
        tooltip: {
          enabled: false
        }
      },
    }
  }
}
</script>

<style lang="scss">
  .visitors {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    gap: 2.5rem;

    border-radius: 0.5rem;
    border: 1px solid $color-accent;
    background: $color-primary;
    &__title {
      width: 100%;
      p {
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }
</style>