import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/Movie'
import Upcoming from '@/components/upcoming'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie
    },
    {
      path: '/upcoming' ,
      name: 'upcomming',
      component: Upcoming
    }
  ]
})
