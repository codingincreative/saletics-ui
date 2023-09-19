<template>
  <div class="total-orders">
    <div class="total-orders__header">
      <h5 class="total-orders__header-title">Total Orders</h5>
      <Dropdown 
        :values="[2023, 2022, 2021, 2020]"
        bottom
      />
    </div>

    <div class="total-orders__chart-container">
      <div id="total-orders__chart">
        <apexchart 
          type="bar" 
          width="100%"
          height="200" 
          :options="chartOptions" 
          :series="series">
        </apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/micro/DropdownBox'

export default {
  components: { Dropdown },
  data() {
    return {
      series: [{
        name: 'Net Profit',
        data: [300, 400, 250, 320, 200, 250, 450, 850, 600, 600, 500, 100]
      },],
      chartOptions: {
        chart: {
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'],
          tickPlacement: 'between',
          labels: {
            style: {
              colors: '#6C727F',
              fontSize: '0.75rem',
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontWeight: '400'
            }
          },
          axisBorder: {
            color: '#6C727F',
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            style: {
              colors: '#D6D6D6',
              fontWeight: '600'
            }
          },
          crosshairs: {
            width: '40.13696px',
            stroke: {
              width: 0
            },
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#2370f800',
                colorTo: '#2370f833',
                stops: [0, 100],
                opacityFrom: 0,
                opacityTo: 20,
              }
            }
          }
        },
        yaxis: {
          categories: [0, 250, 500, 750, 1000],
          labels: {
            style: {
              colors: '#6C727F',
              fontSize: '0.75rem',
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontWeight: '400'
            }
          },
          tickAmount: 4,
          min: 0,
          max: 1000,
        },
        grid: {
          show: false,
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          theme: false,
          marker: {
            show: false,
          },
          custom: function({ series, dataPointIndex, w}) {
            return `
              <p class="apexcharts-tooltip-title">${w.globals.labels[dataPointIndex]}</p>
              <div class="apexcharts-tooltip-y-group">
                <p class="apexcharts-tooltip-text-y-value">${series[0][dataPointIndex]} Total Orders</p>
              </div>
            `
          }
        }
      },
    }
  }
}
</script>

<style lang="scss">
  .total-orders {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    border-radius: 0.5rem;
    border: 1px solid $color-accent;
    background: $color-primary;
    @include media-breakpoint-down(sm) {
      align-items: flex-start;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      &-title {
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
      }
    }

    &__chart-container {
      width: 100%;
      @include media-breakpoint-down(sm) {
        overflow-x: auto;
        overflow-y: hidden;
      }
    }
  }

  // Chart Styles 
  #total-orders__chart {
    width: 100%;
    @include media-breakpoint-down(sm) {
      width: 43rem;
    }
    .apexcharts-xaxistooltip{
      background: $color-primary;
      border: none;
      border-top: 3px solid $color-secondary;
      color: $color-text;
      font-weight: 600;
      margin-left: 1.25rem;
    }
    .apexcharts-xaxistooltip-bottom:before{
      opacity: 0  // hide arrow
    }
    .apexcharts-xaxistooltip-bottom:after{
      opacity: 0  // hide arrow
    }

    .apexcharts-tooltip {
      background-color: $color-hover;
      border-radius: 0.5rem;
      padding: 0.5rem;
      border: 1px solid $color-accent;
      box-shadow: none;
      top: 2% !important;

      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      width: 8.75rem;
    }

    .apexcharts-tooltip-title {
      color: $color-text;
      font-family: $font-family-primary;
      font-size: 0.75rem;
      font-weight: 400;
      margin: 0;
      padding: 0;
    }

    .apexcharts-tooltip-series-group {
      margin: 0; padding: 0;
    }

    .apexcharts-tooltip-text {
      width: 100%;
    }

    .apexcharts-tooltip-y-group {
      display: flex;
      padding: 0;
      width: 100%;
      justify-content: space-between;
    }

    .apexcharts-tooltip-text-y-label {
      color: $color-text;
      font-family: $font-family-primary;
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: capitalize;
    }

    .apexcharts-tooltip-text-y-value {
      margin: 0;
      font-family: $font-family-primary;
      font-size: 0.75rem;
      font-weight: 500;
      color: $color-text;
    }
  }
</style>