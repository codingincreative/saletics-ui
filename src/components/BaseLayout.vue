<template>
  <div class="base">
    <div class="base-head">
      <h3 class="base-head__title">{{ layoutName }}</h3>
      <div class="base-head__notification">
        <NotificationButton left top="6.5" />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import NotificationButton from '@/components/micro/NotificationButton'

export default {
  components: { NotificationButton },
  props: {
    layoutName: {
      type: String,
      required: true,
      default: 'Page'
    }
  }
}
</script>

<style lang="scss">
  .base {
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    margin-left: 17rem;
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

    &-head {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__title {
        font-size: 1.5rem;
        font-weight: 700;
      }

      &__notification {
        @include media-breakpoint-down(lg) {
          display: none;
        }
      }
    }
  }
</style>