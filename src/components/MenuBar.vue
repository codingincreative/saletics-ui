<template>
  <div class="menu">
    <router-link to="/" class="menu__brand">
      <img src="../assets/icon/menubar/saletics-icon.png" alt="Saletics Logo" class="menu__brand-logo">
      <img src="../assets/icon/menubar/menu-mobile.svg" alt="Menu Mobile Icon" :class="menubarIconToggle" class="menu__brand--mobile" @click="toggleMenu">
      <img src="../assets/icon/menubar/saletics-type.png" alt="Saletics Type" class="menu__brand-type">
    </router-link>

    <div class="menu__nav">
      <router-link v-for="menu in menus" :key="menu.name" :to="menu.link" class="menu__nav-list">
        <img :src="menu.icon" :alt="menu.altIcon" class="menu__nav-list__icon">
        <p class="menu__nav-list__text">{{ menu.name }}</p>
      </router-link>
    </div>

    <!-- Menu Nav Mobile Start -->
    <transition name="menuSlide">
      <div class="menu__nav--mobile" v-if="menuBar">
        <router-link v-for="menu in menus" :key="menu.name" :to="menu.link" class="menu__nav-list">
          <img :src="menu.icon" :alt="menu.altIcon" class="menu__nav-list__icon">
          <p class="menu__nav-list__text">{{ menu.name }}</p>
        </router-link>
      </div>
    </transition>
    <!-- Menu Nav Mobile End -->
    
    <div class="menu__user">
      <div class="menu__user-notification">
        <NotificationButton left top="4.5" />
      </div>

      <img src="../assets/image/user-image.jpg" alt="User Image" class="menu__user-image">
      <div class="menu__user-identity">
        <div class="menu__user-identity-group">
          <h6>Jean Doe</h6>
          <p>Staff</p>
        </div>
        <img src="../assets/icon/menubar/chevron-right.svg" alt="Chevron Icon">
      </div>
    </div>
  </div>
</template>

<script>
import NotificationButton from '@/components/micro/NotificationButton'

export default {
  components: { NotificationButton },
  data() {
    return {
      menuBar: false,
      menubarIconToggle: '',
      menus: [
        { link: '/', icon: require('@/assets/icon/menubar/overview.svg'), altIcon: 'Overview Icon', name: 'Overview' },
        { link: 'dashboard', icon: require('@/assets/icon/menubar/orders.svg'), altIcon: 'Orders Icon', name: 'Orders' },
        { link: 'dashboard', icon: require('@/assets/icon/menubar/products.svg'), altIcon: 'Products Icon', name: 'Products' },
        { link: 'dashboard', icon: require('@/assets/icon/menubar/analytics.svg'), altIcon: 'Analytics Icon', name: 'Analytics' },
        { link: 'dashboard', icon: require('@/assets/icon/menubar/shipment.svg'), altIcon: 'Shipment Icon', name: 'Shipment' },
        { link: 'dashboard', icon: require('@/assets/icon/menubar/employee.svg'), altIcon: 'Employee Icon', name: 'Employee' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.menuBar = !this.menuBar
      this.menubarIconToggle = this.menuBar ? 'menu-opened' : ''
    }
  }
}
</script>

<style lang="scss">
  .menu {
    display: flex;
    max-width: 17rem;
    width: 100%;
    height: calc(100vh - 6rem);
    padding: 0rem 1.5rem;
    flex-direction: column;
    gap: 3rem;
    position: fixed;
    background-color: $color-primary;

    border-right: 1px solid $color-accent;
    @include media-breakpoint-down(lg) {
      flex-direction: row;
      max-width: unset;
      width: auto;
      height: 5rem;
      left: 1rem; right: 1rem;
      justify-content: space-between;
      align-items: center;
      border-right: none;
      border-bottom: 1px solid $color-accent;
      padding: 0;
      z-index: 1;
    }
    @include media-breakpoint-down(sm) {
      left: 0.5rem; right: 0.5rem;
    }
    &__brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      @include media-breakpoint-down(xs-2) {
        flex-direction: row-reverse;
      }

      &-logo {
        @include media-breakpoint-down(lg) {
          display: none;
        }
        @include media-breakpoint-down(xs-2) {
          display: block;
          order: 1;
        }
      }

      &-type {
        @include media-breakpoint-down(xs-2) {
          display: none;
          order: 2;
        }
      }

      &--mobile {
        display: none;
        @include media-breakpoint-down(xs-2) {
          order: 1;
        }
        &.menu-opened {
          // Change the icon to blue
          filter: invert(49%) sepia(95%) saturate(5529%) hue-rotate(211deg) brightness(103%) contrast(94%);
        }
        @include media-breakpoint-down(lg) {
          display: block;
        }
      }
    }

    &__nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      @include media-breakpoint-down(lg) {
        display: none;
      }

      & .router-link-active {
        border: 1px solid $color-secondary;
        background-color: $color-hover;
        & .menu__nav-list__icon {
          // Change the icon to blue
          filter: invert(49%) sepia(95%) saturate(5529%) hue-rotate(211deg) brightness(103%) contrast(94%);
        }
        & .menu__nav-list__text {
          color: $color-secondary;
          font-weight: 600;
        }
      }

      &-list {
        display: flex;
        padding: 0.75rem 1rem;
        align-items: center;
        gap: 1rem;

        border-radius: 0.5rem;
        transition: all 0.2s ease;
        &::after {
          display: none;
        }
        &:hover {
          background: $color-hover;
        }

        &__icon {
          width: 1.5rem;
          height: 1.5rem;
        }
        &__text {
          color: $color-text;
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }

    &__user {
      display: flex;
      padding: 0.5rem 0.875rem;
      align-items: center;
      gap: 1rem;
      margin-top: auto;

      border-radius: 0.5rem;
      border: 1px solid $color-accent;
      background-color: $color-hover;
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        border: 1px solid $color-secondary;

        & .menu__user-identity {
          img {
            transform: translateX(0.5rem);
          }
        }
      }
      @include media-breakpoint-down(lg) {
        padding: 0;
        background-color: $color-primary;
        border: none;
        margin-top: 0;
        &:hover {
          border: none;
        }
      }

      &-notification {
        display: none;
        @include media-breakpoint-down(lg) {
          display: block;
        }
      }

      &-image {
        width: 3.625rem;
        height: 3.6875rem;
        border-radius: 50%;
        border: 1px solid $color-accent;
        @include media-breakpoint-down(lg) {
          width: 2.875rem;
          height: 3rem;
        }
      }

      &-identity {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        @include media-breakpoint-down(lg) {
          display: none;
        }
        &-group {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 0.25rem;
          & h6 {
            color: $color-text;
            font-size: 1rem;
            font-weight: 600;
          }
          & p {
            color: $color-text-secondary;
            font-size: 0.75rem;
            font-weight: 400;
          }
        }
        img { transition: all 0.2s ease; }
      }
    }


    // Menu Nav Mobile Styles
    &__nav--mobile {
      position: absolute;
      top: 5rem; left: 0; right: 0; bottom: 0;
      z-index: 1;
      height: calc(100vh - 5rem);
      padding: 2rem 0;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      background-color: $color-primary;

      & .router-link-active {
        border: 1px solid $color-secondary;
        background-color: $color-hover;
        & .menu__nav-list__icon {
          // Change the icon to blue
          filter: invert(49%) sepia(95%) saturate(5529%) hue-rotate(211deg) brightness(103%) contrast(94%);
        }
        & .menu__nav-list__text {
          color: $color-secondary;
          font-weight: 600;
        }
      }

      & .menu__nav-list {
        padding: 1rem;
      }
    }

    // Menu Nav Mobile Transition
    .menuSlide-enter-active,
    .menuSlide-leave-active {
      transition: all 0.5s ease;
    }

    .menuSlide-enter-from,
    .menuSlide-leave-to {
      transform: translateX(-120%);
      opacity: 0;
    }
  }
</style>