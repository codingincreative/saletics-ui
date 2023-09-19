<template>
  <div class="notification">
    <div class="notification__toggle" :class="notificationPop ? 'opened' : ''" @click="notificationToggle">
      <img src="@/assets/icon/menubar/notification.svg" alt="Notification Icon">
    </div>
    <transition name="notifReveal">
      <div class="notification__box" v-if="notificationPop" :class="left ? 'left' : right ? 'right' : ''" :style="{top: `${top}rem`}">
        <p class="notification__box-title">Notifications</p>
        <div class="notification__box-group">
          <p class="notification__box-message">
            <span>Adam</span> has ordered product in <span>Sep 15, 2023</span>.
          </p>
          <p class="notification__box-message">
            <span>Adam</span> has ordered product in <span>Sep 15, 2023</span>.
          </p>
          <p class="notification__box-message">
            <span>Adam</span> has ordered product in <span>Sep 15, 2023</span>.
          </p>
        </div>
        <a href="#">View All Notifications</a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    top: { type: String, default: '3.5'}
  },
  data() {
    return {
      notificationPop: false,
    }
  },
  methods: {
    notificationToggle() {
      this.notificationPop = !this.notificationPop
    }
  }
}
</script>

<style lang="scss">
  .notification {
    &__toggle {
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

      &.opened {
        border: 1px solid $color-secondary;
      }
    }

    &__box {
      display: flex;
      width: 15.625rem;
      padding: 1rem 0rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.875rem;

      border-radius: 0.5rem;
      border: 1px solid $color-accent;
      background: $color-primary;

      position: absolute;
      z-index: 1;
      // top: 3.5rem;
      &.left { 
        right: 4rem;
        @include media-breakpoint-down(xs-2) {
          right: 0;
        }
      }
      &.right { left: unset; }
      &-title {
        font-size: 1rem;
        font-weight: 700;
      }
      &-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      &-message {
        padding: 0.75rem 1rem;
        background: $color-primary;
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;
        transition: all 0.2s linear;
        &:hover {
          background: $color-hover;
        }
        span {
          font-weight: 700;
        }
      }
      a {
        color: $color-secondary;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }
</style>