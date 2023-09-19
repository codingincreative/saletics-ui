<template>
  <MenuBar />
  <!-- BaseLayout Component -->
  <BaseLayout layoutName="My Profile">
    <!-- Code goes here -->
    <div class="edit-profile">
      <div class="edit-profile__title">
        <p class="edit-profile__title-1">Personal Information</p>
        <p class="edit-profile__title-2">Update your personal information details here</p>
      </div>

      <div class="edit-profile__image">
        <p class="edit-profile__image-text">Photo Profile</p>
        <img src="../assets/image/employee-1.png" alt="Employee Pict">
        <div class="edit-profile__image-button">
          <button class="edit-profile__image-button--change" type="button">Change</button>
          <button class="edit-profile__image-button--delete" type="button">Delete</button>
        </div>
      </div>

      <div class="edit-profile__input">
        <label for="name" class="edit-profile__input-label">Name</label>
        <input id="name" type="text" class="edit-profile__input-box" value="Theresa Webb">
      </div>

      <div class="edit-profile__input">
        <label for="email" class="edit-profile__input-label">Email</label>
        <input id="email" type="text" class="edit-profile__input-box" value="theresawebb@gmail.com">
      </div>

      <div class="edit-profile__input">
        <label for="job" class="edit-profile__input-label">Job Role</label>
        <input id="job" type="text" class="edit-profile__input-box" value="Product Manager">
      </div>

      <div class="edit-profile__input">
        <label for="phone" class="edit-profile__input-label">Phone</label>
        <input id="phone" type="text" class="edit-profile__input-box" value="(123) - 555 - 1234">
      </div>

      <div class="edit-profile__button">
        <button type="button" class="edit-profile__button--save">Save Changes</button>
        <button type="button" class="edit-profile__button--cancel">Cancel</button>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import BaseLayout from '@/components/BaseLayout'

export default {
  components: { MenuBar, BaseLayout }
}
</script>

<style lang="scss">
  .edit-profile {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    gap: 2rem;

    border-radius: 0.5rem;
    border: 1px solid $color-accent;
    &__title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      &-1 {
        font-size: 1.25rem;
        font-weight: 700;
      }
      &-2 {
        color: $color-text-secondary;
        font-size: 1rem;
        font-weight: 400;
      }
    }

    &__image {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      width: fit-content;
      &-text {
        font-size: 1rem;
        font-weight: 700;
      }
      & img {
        width: 12.5rem;
        height: 12.5rem;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 0.25rem;
        @include media-breakpoint-down(xs-2) {
          width: 100%;
          height: 100%;
        }
      }
      &-button {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        width: 100%;
        &--change,
        &--delete {
          display: flex;
          padding: 0.5rem;
          justify-content: center;
          align-items: center;
          gap: 0.625rem;
          width: 100%;

          border-radius: 0.25rem;
          background: $color-accent;
          outline: none;
          border: 1px solid $color-accent;
          transition: all 0.2s ease;

          font-size: 0.875rem;
          font-weight: 400;
        }
        &--change {
          color: $color-secondary;
          &:hover {
            border: 1px solid $color-secondary;
          }
        }
        &--delete {
          color: $color-text-bearish;
          &:hover {
            border: 1px solid $color-text-bearish;
          }
        }
      }
    }

    &__input {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      &-label {
        font-size: 1rem;
        font-weight: 700;
      }
      &-box {
        display: flex;
        width: 37.5rem;
        padding: 1rem;

        border-radius: 0.5rem;
        border: 1px solid $color-accent;
        background: $color-primary;
        outline: none;
        transition: all 0.2s ease;

        color: $color-text;
        font-size: 0.875rem;
        font-weight: 400;
        &:hover, &:focus, &:active, &:focus-visible, &:focus-within {
          border: 1px solid $color-secondary;
        }
        @include media-breakpoint-down(md) {
          width: 100%;
        }
      }
    }

    &__button {
      display: flex;
      align-items: stretch;
      gap: 1rem;
      width: 26rem;
      @include media-breakpoint-down(sm) {
        width: 100%;
      }
      @include media-breakpoint-down(xs-2) {
        flex-direction: column;
      }
      &--save,
      &--cancel {
        display: flex;
        padding: 0.5rem;
        justify-content: center;
        width: 100%;

        border-radius: 0.25rem;
        outline: none;
        transition: all 0.2s ease;
        
        font-size: 1rem;
        font-weight: 500;
      }
      &--save {
        background: $color-secondary;
        border: 1px solid $color-secondary;
        color: $color-text;
        &:hover {
          background: $color-secondary-dark;
        }
      }
      &--cancel {
        background: $color-primary;
        border: 1px solid $color-accent;
        color: $color-text-bearish;
        &:hover {
          border: 1px solid $color-text-bearish;
        }
      }
    }
  }
</style>