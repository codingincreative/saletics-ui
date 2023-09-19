<template>
  <div class="sales">
    <div class="sales__header">
      <h5 class="sales__header-title">Sales Growth</h5>
      <Dropdown 
        :values="[2023, 2022, 2021, 2020]"
        bottom
      />
    </div>

    <div class="sales-chart-container">
      <div id="sales-chart">
        <apexchart
          width="100%"
          height="100%"
          type="line"
          :options="chartOptions"
          :series="series"
        ></apexchart>
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
      // Chart Config
      chartOptions: {
        colors: ['#16C784', '#EA3943'],
        legend: { show: false, },
        stroke: { curve: 'smooth' },
        markers: {
          colors: '#161C24',
          strokeColors: ['#16C784', '#EA3943'],
          strokeWidth: 4
        },
        chart: {
          id: "sales-chart",
          type: 'line',
          toolbar: {
            show: false,
          },
          fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
          categories: [0, 1000, 5000, 10000, 20000],
          labels: {
            style: {
              colors: '#6C727F',
              fontSize: '0.75rem',
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontWeight: '400'
            },
            formatter: (value) => {
              if(value >= 1000) {
                return `${value / 1000}k`
              }
              return value
            }
          },
          tickAmount: 4,
          min: 0,
          max: 20000,
        },
        grid: {
          show: false,
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
                <p class="apexcharts-tooltip-text-y-label">Income</p>
                <p class="apexcharts-tooltip-text-y-value text-bullish">${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(series[0][dataPointIndex])}</p>
              </div>
              <div class="apexcharts-tooltip-y-group">
                <p class="apexcharts-tooltip-text-y-label">Expense</p>
                <p class="apexcharts-tooltip-text-y-value text-bearish">${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(series[1][dataPointIndex])}</p>
              </div>
            `
          }
        }
      },
      series: [
        {
          name: "Income",
          data: [2000, 4000, 5000, 4800, 2000, 5400, 20000, 7000, 19000, 8000],
        },
        {
          name: "Expense",
          data: [7000, 12000, 4000, 8000, 900, 6000, 6000, 1200, 19000, 1000],
        },
      ],
    };
  },
  methods: {
    tooltipFormatter(data) {
      const formattedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(data)

      return formattedValue
    }
  }
}
</script>

<style lang="scss">
  .sales {
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

    &-chart-container {
      width: 100%;
      @include media-breakpoint-down(sm) {
        overflow-x: auto;
        overflow-y: hidden;
      }
    }
  }

  // Chart Styles
  #sales-chart {
    width: 100%;
    height: 12.125rem;
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

      &.text-bullish { color: $color-text-bullish; }
      &.text-bearish { color: $color-text-bearish; }
    }
  }
</style>