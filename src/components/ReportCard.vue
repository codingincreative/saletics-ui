<template>
  <div class="report-card">
    <div class="report-card__head">
      <img :src="image" :alt="altImage">
      <p class="report-card__head-percent" :class="bullish ? 'text-bullish' : bearish ? 'text-bearish' : 'text-default'">{{ percent }}</p>
    </div>
    <div class="report-card__text">
      <h6>{{ currency }}</h6>
      <p>{{ totalName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    altImage: String,
    percent: String,
    bullish: { type: Boolean, default: false },
    bearish: { type: Boolean, default: false },
    currency: String,
    totalName: String
  }
}
</script>

<style lang="scss">
  .report-card {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;

    border-radius: 0.5rem;
    border: 1px solid $color-accent;
    background: $color-primary;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      border: 1px solid $color-secondary;
      background: $color-hover;
    }
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      &-percent {
        font-size: 1rem;
        font-weight: 600;

        &.text-bullish { color: $color-text-bullish; }
        &.text-bearish { color: $color-text-bearish; }
        &.text-default { color: $color-text; }
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      h6 {
        color: $color-text;
        font-size: 1.25rem;
        font-weight: 600;
      }
      p {
        color: $color-text-secondary;
        font-size: 0.875rem;
        font-weight: 400;
      }
    }
  }
</style>