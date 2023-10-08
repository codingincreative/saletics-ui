import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import OrdersView from '@/views/OrdersView.vue'
import ProductsView from '@/views/ProductsView'
import AnalyticsView from '@/views/AnalyticsView'
import ShipmentView from '@/views/ShipmentView'
import EmployeeView from '@/views/EmployeeView'
import EditProfile from '@/views/EditProfileView'
import EditCompany from '@/views/EditCompanyView'
import NotFoundView from '@/views/NotFoundView'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: AnalyticsView
  },
  {
    path: '/shipment',
    name: 'shipment',
    component: ShipmentView
  },
  {
    path: '/employee',
    name: 'employee',
    component: EmployeeView
  },
  {
    path: '/edit-profile',
    name: 'editProfile',
    component: EditProfile
  },
  {
    path: '/edit-company',
    name: 'editCompany',
    component: EditCompany
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFoundView
  },
  {
    path: '/:pathMatch(.*)',
    name: 'badNotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
