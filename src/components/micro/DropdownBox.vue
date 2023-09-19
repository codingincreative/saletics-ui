<template>
  <div class="dropdown">
    <button type="button" class="dropdown__toggle" @click="dropdownToggle">
      <p>{{ currentValue }}</p>
      <img src="@/assets/icon/dropdown/chevron-down.svg" alt="Dropdown Toggle" :class="dropdownMenu ? 'opened' : ''">
    </button>

    <transition name="dropdown">
      <ul class="dropdown__menu" :class="top ? 'top' : bottom ? 'bottom' : ''" v-if="dropdownMenu">
        <li v-for="value in values" :key="value" @click="changeValues">
          <p class="dropdown__menu-item">{{ value }}</p>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      required: true
    },
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dropdownMenu: false,
      currentValue: this.values[0]
    }
  },
  methods: {
    dropdownToggle() {
      this.dropdownMenu = !this.dropdownMenu
    },
    changeValues(e) {
      this.currentValue = e.srcElement.innerText
      this.dropdownMenu = false
    }
  }
}
</script>

<style lang="scss">
  .dropdown {
    position: relative;
    width: 5rem;

    &__toggle {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;

      border-radius: 0.25rem;
      border: 1px solid $color-accent;
      background-color: $color-primary;
      p {
        color: $color-text;
        font-size: 0.875rem;
        font-weight: 600;
      }
      img {
        transition: transform 0.2s ease;
        &.opened {
          transform: rotate(180deg);
        }
      }
    }
    &__menu {
      margin: 0;
      padding: 0.25rem 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      text-align: center;
      position: absolute;
      margin-top: 0.25rem;

      border: 1px solid $color-accent;
      border-radius: 0.25rem;
      background-color: $color-primary;
      z-index: 1;
      &.top {
        bottom: 2.75rem
      }
      &.bottom {
        bottom: unset;
      }
      li {
        list-style: none;
        p {
          color: $color-text-secondary;
          font-size: 0.875rem;
          transition: all 0.2s linear;
          cursor: pointer;
          &:hover {
            color: $color-text;
          }
          &::after {
            display: none;
          }
        }
      }
    }
  }

  // Dropdown Transition
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: all 0.2s ease;
  }

  .dropdown-enter-from,
  .dropdown-leave-to {
    transform: translateY(-1.5rem);
    opacity: 0;
  }
</style>