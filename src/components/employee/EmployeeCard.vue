<template>
  <div class="employee-card">
    <img :src="employeeImage" :alt="employeeName" class="employee-card__image" loading="lazy">
    <div class="employee-card__identity">
      <p class="employee-card__identity-name">{{ employeeName }}</p>
      <p class="employee-card__identity-job">{{ employeeJob }}</p>
    </div>
    <div class="employee-card__contact">
      <img src="../../assets/icon/mail.svg" alt="Mail Icon">
      <p class="employee-card__contact-text">{{ employeeMail }}</p>
    </div>
    <div class="employee-card__contact">
      <img src="../../assets/icon/phone.svg" alt="Phone Icon">
      <p class="employee-card__contact-text">{{ employeePhone }}</p>
    </div>
    <button type="button" class="employee-card__button">Manage</button>
  </div>
</template>

<script>
export default {
  props: {
    employeeImage: String,
    employeeName: String,
    employeeJob: String,
    employeeMail: String,
    employeePhone: String,
  }
}
</script>

<style lang="scss">
  .employee-card {
    display: flex;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;

    border-radius: 0.5rem;
    border: 1px solid $color-accent;
    transition: all 0.2s ease;
    &:hover {
      border: 1px solid $color-secondary;
    }
    &__image {
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      border-radius: 0.25rem;
    }
    &__identity {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.25rem;
      &-name {
        font-size: 1rem;
        font-weight: 600;
      }
      &-job {
        color: $color-text-secondary;
        font-size: 0.75rem;
        font-weight: 400;
      }
    }
    &__contact {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
      &-text {
        font-size: 0.75rem;
        font-weight: 400;
      }
    }
    &__button {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      gap: 0.625rem;
      width: 100%;

      border-radius: 0.25rem;
      background: $color-secondary;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;

      color: $color-text;
      text-align: center;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        background: $color-secondary-dark;
      }
    }
  }
</style>