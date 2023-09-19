<template>
  <MenuBar />
  <!-- BaseLayout Component -->
  <BaseLayout layoutName="Employee">
    <!-- Code goes here -->
    <div class="employee">
      <div class="employee__head">
        <p class="employee__head-title">8 Employees</p>
        <div class="employee__head-right-nav">
          <SearchBar searchValue="Employee" />
          <div class="employee__head-filter">
            <img src="../assets/icon/filter.svg" alt="Filter Icon">
          </div>
          <Button text="Add Employee" />
        </div>
      </div>

      <div class="employee__content">
        <EmployeeCard
          v-for="employee in employees" :key="employee.name"
          :employeeImage="employee.image"
          :employeeName="employee.name"
          :employeeJob="employee.job"
          :employeeMail="employee.mail"
          :employeePhone="employee.phone"
        />
      </div>

      <PaginationBar :itemsPerPage="[8, 16, 32, 40]" />
    </div>
  </BaseLayout>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import BaseLayout from '@/components/BaseLayout'
import SearchBar from '@/components/micro/SearchBar'
import PaginationBar from '@/components/micro/PaginationBar'
import Button from '@/components/micro/ButtonComp'
import EmployeeCard from '@/components/employee/EmployeeCard'

import Employee1 from '@/assets/image/employee-1.png'
import Employee2 from '@/assets/image/employee-2.png'
import Employee3 from '@/assets/image/employee-3.png'
import Employee4 from '@/assets/image/employee-4.png'

export default {
  components: { MenuBar, BaseLayout, SearchBar, PaginationBar, Button, EmployeeCard },
  data() {
    return {
      employees: [
        { image: Employee1, name: 'Theresa Webb', job: 'Product Manager', mail: 'theresawebb@gmail.com', phone: '(229) - 555 - 9018' },
        { image: Employee2, name: 'Alexander Hipp', job: 'Product Specialist', mail: 'alexanderhipp@gmail.com', phone: '(229) - 555 - 9018' },
        { image: Employee3, name: 'Nicolas Horn', job: 'HR', mail: 'nicolashorn@gmail.com', phone: '(229) - 555 - 9018' },
        { image: Employee4, name: 'Jennie Wilson', job: 'Business Analyst', mail: 'jenniewilson@gmail.com', phone: '(229) - 555 - 9018' },
        { image: Employee1, name: 'Theresa Webb', job: 'Product Manager', mail: 'theresawebb@gmail.com', phone: '(229) - 555 - 9018' },
        { image: Employee2, name: 'Alexander Hipp', job: 'Product Specialist', mail: 'alexanderhipp@gmail.com', phone: '(229) - 555 - 9018' },
        { image: Employee3, name: 'Nicolas Horn', job: 'HR', mail: 'nicolashorn@gmail.com', phone: '(229) - 555 - 9018' },
        { image: Employee4, name: 'Jennie Wilson', job: 'Business Analyst', mail: 'jenniewilson@gmail.com', phone: '(229) - 555 - 9018' },
      ]
    }
  }
}
</script>

<style lang="scss">
  .employee {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    border-radius: 0.5rem;
    border: 1px solid $color-accent;
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 1rem;
      @include media-breakpoint-down(lg-2) {
        flex-wrap: wrap;
      }
      @include media-breakpoint-down(md) {
        flex-direction: column;
        align-items: flex-start;
      }
      &-title {
        font-size: 1rem;
        font-weight: 600;
      }
      &-right-nav {
        display: flex;
        align-items: stretch;
        gap: 1rem;
        @include media-breakpoint-down(md) {
          width: 100%;
        }
        @include media-breakpoint-down(xs-3) {
          flex-wrap: wrap;
        }
      }

      &-filter {
        display: flex;
        padding: 0.5rem;
        align-items: center;
        border-radius: 0.25rem;
        border: 1px solid $color-accent;
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: $color-secondary;
        }
        @include media-breakpoint-down(xs-3) {
          flex: 1;
          justify-content: center;
        }
        img {
          width: 1.875rem;
          height: 1.875rem;
        }
      }
    }

    &__content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(16.26563rem, 1fr));
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
    }
  }
</style>