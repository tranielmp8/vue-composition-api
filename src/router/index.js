import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '@/views/DetailsView.vue'
import CreateView from '@/views/CreateView.vue'
import TagsView from '@/views/TagsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/posts/:id',
      name: 'Details',
      component: DetailsView,
      props: true
    },
    {
      path: '/create',
      name: 'Create',
      component: CreateView,
      
    },
    {
      path: '/tags/:tag',
      name: 'Tags',
      component: TagsView,
      //props: true
      
    },
  ],
})

export default router
